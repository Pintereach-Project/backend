
exports.seed = function(knex) {
  return knex('readLater').insert([
    {articleId: 9, userId: 1},
    {articleId: 3, userId: 1},
    {articleId: 7, userId: 1},
    {articleId: 4, userId: 2},
    {articleId: 5, userId: 2},
    {articleId: 1, userId: 2},
    {articleId: 2, userId: 3},
    {articleId: 8, userId: 3},
    {articleId: 6, userId: 3}
  ]);
};
