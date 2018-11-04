const app = require('./../../app'),
  chai = require('chai'),
  request = require('supertest');

const expect = chai.expect;
const assert = chai.assert;

// this spec is to ensure that web service is able to exectue 'integration' tests
describe('Simple API test', () => {
  it('should return 200OK and not empty response', done => {
    request(app)
      .get('/')
      .end((err, res) => {
        assert(res.body != null);
        expect(res.status).to.equals(200);
        done();
      });
  });
});
