
const express = require('express');
const bodyParser = require('body-parser');
const welcome = require('./messages/welcome');
// var {User} = require('./models/user');
// var {authenticate} = require('./middleware/authenticate');

const app = express();


app.use(bodyParser.json());

app.get('/', welcome);


module.exports = app;
