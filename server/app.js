const express = require('express');
const path = require('path');
const process = require('process')
const bodyParser = require('body-parser');
const welcome = require('./messages/welcome');
require('./config/config');
// var {User} = require('./models/user');
// var {authenticate} = require('./middleware/authenticate');
console.log('working directory :' + process.cwd())
console.log('script  directory :' + __dirname)
const app = express();

app.use(bodyParser.json());
app.use('/static',express.static(path.join(__dirname, 'public')));
app.get('/', welcome);

module.exports = app;

app.listen(process.env.PORT,
    () => console.log(`${process.env.MODULE_NAME} app listening at http://localhost:${process.env.PORT}`))
