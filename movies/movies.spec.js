const Movies = require("../movies/movies-model");
const db = require("../database/dbConfig");

describe("movies model", function() {
  beforeEach(async () => {
    await db("movies").truncate();
  });

  describe("remove()", function() {
    it("should delete a movie", async function() {
      await Movies.insert({ id: 1, title: "Remember The Titans" });
      await Movies.insert({ id: 2, title: "Bourne Ultimatum" });
      await Movies.insert({ id: 3, title: "Aladdin" });

      const movieCount = await db("Movies").then(movies => movies.length);

      await Movies.remove(3);
      const movies = await db("movies");
      expect(movies).toHaveLength(movieCount - 1);
    });
  });
});
