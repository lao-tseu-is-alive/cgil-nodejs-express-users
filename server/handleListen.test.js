const handleListen = require('./handleListen');
require('./config/config');

// https://codeburst.io/revisiting-node-js-testing-part-2-14f50f8ddab5

test('should call log with app...', () => {
  const port = process.env.PORT;
  const log = jest.fn();
  handleListen(log, port);
  expect(log.mock.calls).toHaveLength(1);
  expect(log.mock.calls[0][0]).toBe(`Server Started up at port ${port} !`);
});
