const router = require('express').Router();
const savedArticle = require('./savedArticle-model');

router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const articles = await savedArticle.getAll(userId);
    if(articles.length) {
      res.status(200).json(articles);
    } else {
      res.status(404).json({ message: `No articles were found for user with id of ${userId}` });
    }
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/', async (req, res) => {
  try {
    const { savedId } = req.body;
    const deleted = await savedArticle.removeArticle(savedId);
    if(deleted) {
      res.status(200).json({ message: 'Saved article was succesfully removed from list' });
    } else {
      res.status(404).json({ message: `Article with the id of ${savedId} not found` });
    }
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;