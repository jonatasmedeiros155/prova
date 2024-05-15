// routes/jogadorRoutes.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
  const { jogadorId, timeId } = req.body;
  const novoJogador = await prisma.jogador.create({
    data: {
      jogadorId,
      timeId,
    },
  });
  res.json(novoJogador);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const jogador = await prisma.jogador.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(jogador);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { jogadorId, timeId } = req.body;
  const jogadorAtualizado = await prisma.jogador.update({
    where: {
      id: Number(id),
    },
    data: {
      jogadorId,
      timeId,
    },
  });
  res.json(jogadorAtualizado);
});

module.exports = router;
