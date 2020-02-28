const request = require("supertest");
const server = require("./server");

describe("server model", function() {
  it("should return 200 status", function() {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  it("should return 200 status", function() {
    return request(server)
      .delete("/:id")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
}); 