const express = require("express");
const server = express();
const Movies = require("../movies/movies-model");

server.use(express.json());

server.get("/", (req, res) => {
  res.send("I am alive!");
});

server.get("/movies", (req, res) => {
  Movies.getMovies()
    .then(movies => {
      res.status(200).json(movies);
    })
    .catch(error => {
      res.status(500).json({ message: "Problems getting movies" });
    });
});

server.delete("/:id", (req, res) => {
  Movies.remove(req.params.id)
    .then(id => {
      res.status(200).json(id);
    })
    .catch(error => {
      res.status(500).json({ message: "Problems deleting movie" });
    });
});

module.exports = server;
