
exports.seed = function(knex) {
  return knex('users').insert([
    {email: 'email1', username: 'username1', password: 'password1'},
    {email: 'email2', username: 'username2', password: 'password2'},
    {email: 'email3', username: 'username3', password: 'password3'}
  ]);
};
