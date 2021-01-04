
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl.string('email', 256).notNullable().unique();
      tbl.string('username', 64).notNullable().unique();
      tbl.string('password', 128).notNullable();
    })
    .createTable('articles', tbl => {
      tbl.increments();
      tbl.string('title', 128).notNullable();
      tbl.string('description').notNullable();
      tbl.string('category');
      tbl.integer('rank').defaultTo(0);
    })
    .createTable('readLater', tbl => {
      tbl.increments();
      tbl.integer('articleId')
        .unsigned().references('articles.id')
        .onDelete('RESTRICT').onUpdate('CASCADE');
      tbl.integer('userId')
      .unsigned().references('users.id')
      .onDelete('RESTRICT').onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('readLater')
  .dropTableIfExists('articles')
  .dropTableIfExists('users');
};
