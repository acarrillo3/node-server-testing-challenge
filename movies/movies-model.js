const db = require('../database/dbConfig');

module.exports = {
   getMovies,
   remove
}

function getMovies() {
   return db('movies');
}

function remove(id) {
   return db('movies')
      .where({id})
      .del();
} 