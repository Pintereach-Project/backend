const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const authRouter = require('./auth/auth-router');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

module.exports = server;