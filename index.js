require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

process.env.NODE_ENV = 'development';

const environment = process.env.NODE_ENV;
const stage = require('./config')[environment];
const routes = require('./routes/index.js');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/', routes(router));

if (environment !== 'production') {
    app.use(logger('dev'));
}

app.listen(`${stage.port}`, ()=> {
    console.log(`Server now listening at localhost:${stage.port}`);
});

module.exports = app;
