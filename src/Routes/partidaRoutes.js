const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
  const { jogadorId, timeId } = req.body;
  const novaPartida = await prisma.partida.create({
    data: {
      jogadorId,
      timeId,
    },
  });
  res.json(novaPartida);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const partida = await prisma.partida.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(partida);
});

module.exports = router;
