
exports.seed = function(knex) {
  return knex('users').insert([
    {email: 'email1', username: 'username1', password: '$2a$08$PE3EheRMl7.uzucQWnh2S.nl86u3bFuAR02JYecJVZL8xjAZbWteC'},
    {email: 'email2', username: 'username2', password: '$2a$08$pVHytHghU0Pyg0sEHYbNHe18VRPnKneVZ4Q0DLf0s4EAisga2XYZi'},
    {email: 'email3', username: 'username3', password: '$2a$08$31hoXtrNgS1Ykj8zxB.zPOnDYkNhZ.m3twyp3GWNxh3FIRIYgSLbe'}
  ]);
};
