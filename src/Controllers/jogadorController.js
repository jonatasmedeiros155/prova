// controllers/jogadorController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createJogador = async (req, res) => {
  const { jogadorId, timeId } = req.body;
  const novoJogador = await prisma.jogador.create({
    data: {
      jogadorId,
      timeId,
    },
  });
  res.json(novoJogador);
};

exports.getJogador = async (req, res) => {
  const { id } = req.params;
  const jogador = await prisma.jogador.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(jogador);
};

exports.updateJogador = async (req, res) => {
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
};
