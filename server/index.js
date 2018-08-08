const app = require('./app');
const handleListen = require('./handleListen');
require('./config/config');

const port = process.env.PORT;

app.listen(port, handleListen(console.log, port));
