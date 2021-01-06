const router = require('express').Router();
const Article = require('./article-model');

router.get('/', async (req, res) => {
  try {
    const articles = await Article.getAll();
    if(articles.length) {
      res.status(200).json(articles);
    } else {
      res.status(404).json({ message: 'No articles found' });
    }
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const articles = await Article.getById(id);
    if(articles) {
      res.status(200).json(articles);
    } else {
      res.status(404).json({ message: `Article with the id of ${id} not found` });
    }
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const newArticle = await Article.update(id, changes);
    if(newArticle) {
      res.status(200).json(newArticle);
    } else {
      res.status(400).json({ message: `Article with the id of ${id} not found` });
    }
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;