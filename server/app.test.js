const request = require('supertest');
const app = require('./app');

test('should pass integration tests', (done) => {
  request(app)
    .get('/')
    .expect(200, `Welcome to ${process.env.MODULE_NAME}`)
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});
