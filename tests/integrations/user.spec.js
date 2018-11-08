const app = require("./../../app"),
  chai = require("chai"),
  request = require("supertest");

const expect = chai.expect;
const assert = chai.assert;

describe("User API", () => {
  it("should return recently created user", done => {
    request(app)
      .post("/api/users")
      .send({
        user: {
          name: "Tim Berners-Lee",
          email: "tim@w3c.org",
          password: "secret123"
        }
      })
      .end((err, res) => {
        assert(res.body.user != null);
        expect(res.status).to.equals(201);
        done();
      });
  });

  it("should return 500 if user is null", done => {
    request(app)
      .post("/api/users")
      .send({ user: null })
      .end((err, res) => {
        expect(res.status).to.equals(500);
      });
  });
});
