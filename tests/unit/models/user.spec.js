const expect = require("chai").expect;

const User = require("./../../../models/User");

describe("User model", () => {
  it("should return true if given password match with stored hash", done => {
    let password = "secret";
    let user = new User({ password: password });

    // perform some validation
    user.setPassword(password);
  
  });
});
