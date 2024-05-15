const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
  const { jogadorId, timeId } = req.body;
  const novoTime = await prisma.time.create({
    data: {
      jogadorId,
      timeId,
    },
  });
  res.json(novoTime);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const time = await prisma.time.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(time);
});

module.exports = router;
