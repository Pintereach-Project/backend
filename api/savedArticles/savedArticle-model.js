const db = require('../../database/db-config');

function getAll(userId) {
  return db('readLater as rL')
  .join('articles as a', 'rL.articleId', 'a.id')
  .join('users as u', 'rL.userId', 'u.id')
  .select('rL.id as savedId', 'a.author', 'a.category', 'a.content', 'a.id as articleId', 'a.image', 'a.rank', 'a.title')
  .where('u.id', userId)
  .orderBy('a.id');
}

function removeArticle(id) {
  return db('readLater').where({id}).del();
}

module.exports = {
  getAll,
  removeArticle
};