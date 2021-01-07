const db = require('../../database/db-config');

function getAll() {
  return db('articles');
}

function getById(id) {
  return db('articles').where('id', id).first();
}

async function update(id, changes) {
  await db('articles').where({id}).update(changes);
  return getById(id);
}

async function saveArticle(articleId, userId) {
  await db('readLater').insert({articleId: articleId, userId: userId});
  return getById(articleId);
}

module.exports = {
  getAll,
  getById,
  update,
  saveArticle
};