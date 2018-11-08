const assert = require('chai').assert;

const User = require('./../../../../src/server/models/User');

describe("User model", () => {
  it("should return true if given password is match with stored hash", done => {
    let password = "secret";
    let user = new User();

    // perform some validation
    user.setPassword(password);
    assert(user.validPassword(password) === true);
    done();
  });

  it("should return false if given password is not matched with stored hash", done => {
    let user = new User();

    // perform some validation
    user.setPassword("secret1");
    assert(user.validPassword("secret2") === false);
    done();
  });
});
