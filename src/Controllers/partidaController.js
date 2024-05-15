// controllers/partidaController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createPartida = async (req, res) => {
  const { jogadorId, timeId } = req.body;
  const novaPartida = await prisma.partida.create({
    data: {
      jogadorId,
      timeId,
    },
  });
  res.json(novaPartida);
};

exports.getPartida = async (req, res) => {
  const { id } = req.params;
  const partida = await prisma.partida.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(partida);
};

exports.updatePartida = async (req, res) => {
  const { id } = req.params;
  const { jogadorId, timeId } = req.body;
  const partidaAtualizada = await prisma.partida.update({
    where: {
      id: Number(id),
    },
    data: {
      jogadorId,
      timeId,
    },
  });
  res.json(partidaAtualizada);
};
