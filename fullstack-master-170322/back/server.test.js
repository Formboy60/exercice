// Testing is part of life, some even say that's Life
const request = require("supertest");
const app = require("./server");

describe("Test the root path", () => {

    test("It should response the GET method", done => {
      request(app)
        .get("/api/pokemon/1")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    })

})