const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
  const { jogadorId, timeId } = req.body;
  const novoJogadorTime = await prisma.jogadorTime.create({
    data: {
      jogadorId,
      timeId,
    },
  });
  res.json(novoJogadorTime);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const jogadorTime = await prisma.jogadorTime.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(jogadorTime);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { jogadorId, timeId } = req.body;
  const jogadorTimeAtualizado = await prisma.jogadorTime.update({
    where: {
      id: Number(id),
    },
    data: {
      jogadorId,
      timeId,
    },
  });
  res.json(jogadorTimeAtualizado);
});

module.exports = router;