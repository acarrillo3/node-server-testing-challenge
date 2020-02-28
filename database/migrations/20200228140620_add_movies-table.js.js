
exports.up = function(knex) {
    return knex.schema.createTable('movies', table => {
       table.increments();
 
       table
          .string('title', 128);
    })
 };
 
 exports.down = function(knex) {
    return knex.schema.dropTableIfExists('movies');
 };