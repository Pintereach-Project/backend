const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const authRouter = require('./auth/auth-router');
const articleRouter = require('./articles/article-router');
const savedArticleRouter = require('./savedArticles/savedArticle-router');

const restricted = require('./middleware/restricted');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/articles', restricted, articleRouter);
server.use('/api/saved-articles', restricted, savedArticleRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

module.exports = server;