const app = require("./../../app"),
  chai = require("chai"),
  request = require("supertest");

const expect = chai.expect;
const assert = chai.assert;

describe("User API", () => {
  it("should return recently created user", done => {
    request(app)
      .post("/api/users")
      .send({"name": "Tim Berners-Lee", "email":"tim@w3c.org"})
      .end((err, res) => {
        assert(res.body.user != null);
        expect(res.status).to.equals(200);
        done();
      });
  });
});
