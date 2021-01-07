
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
      tbl.string('title', 256).notNullable();
      tbl.string('author').notNullable();
      tbl.string('content').notNullable();
      tbl.string('image');
      tbl.string('category');
      tbl.integer('rank').defaultTo(0);
    })
    .createTable('readLater', tbl => {
      tbl.increments();
      tbl.integer('articleId').notNullable()
        .unsigned().references('articles.id')
        .onDelete().onUpdate('CASCADE');
      tbl.integer('userId').notNullable()
      .unsigned().references('users.id')
      .onDelete().onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('readLater')
  .dropTableIfExists('articles')
  .dropTableIfExists('users');
};
