// controllers/timeController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createTime = async (req, res) => {
  const { jogadorId, timeId } = req.body;
  const novoTime = await prisma.time.create({
    data: {
      jogadorId,
      timeId,
    },
  });
  res.json(novoTime);
};

exports.getTime = async (req, res) => {
  const { id } = req.params;
  const time = await prisma.time.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(time);
};

exports.updateTime = async (req, res) => {
  const { id } = req.params;
  const { jogadorId, timeId } = req.body;
  const timeAtualizado = await prisma.time.update({
    where: {
      id: Number(id),
    },
    data: {
      jogadorId,
      timeId,
    },
  });
  res.json(timeAtualizado);
};
