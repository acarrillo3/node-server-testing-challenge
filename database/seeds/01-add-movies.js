
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'Saving Private Ryan'},
        {id: 2, title: 'Gladiator'},
        {id: 3, title: 'The Lion King'}
      ]);
    });
};