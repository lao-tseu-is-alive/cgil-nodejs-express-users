const welcome = require('./welcome');
require('../config/config');

test('should call res.send() with welcome message!', () => {
  const send = jest.fn();
  const res = {
    send,
  };
  welcome({}, res);
  expect(send.mock.calls).toHaveLength(1);
  expect(send.mock.calls[0][0]).toBe(`Welcome to ${process.env.MODULE_NAME}`);
});
