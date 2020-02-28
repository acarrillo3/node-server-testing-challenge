const db = require("../database/dbConfig");

module.exports = {
  getMovies,
  remove,
  insert
};

function getMovies() {
  return db("movies");
}

function remove(id) {
  return db("movies")
    .where({ id })
    .del();
}

async function insert(movie) {
  return db("movies")
    .insert(movie)
    .returning("id");
}
