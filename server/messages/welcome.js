require('../config/config');

module.exports = (_, res) => res.send(`Welcome to ${process.env.MODULE_NAME}`);
