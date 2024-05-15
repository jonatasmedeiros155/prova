app.js

JavaScript

const express = require('express');
const jogadorRoutes = require('./Routes/jogadorRoutes');
const timeRoutes = require('./Routes/timeRoutes');
const partidaRoutes = require('./Routes/partidaRoutes');
const jogadorTimeRoutes = require('./Routes/jogadorTimeRoutes');

const app = express();
app.use(express.json());

app.use('/jogadores', jogadorRoutes);
app.use('/times', timeRoutes);
app.use('/partidas', partidaRoutes);

const server = app.listen(3000, () =>
  console.log(`Server ready at: http://localhost:3000`)
);

module.exports = server;