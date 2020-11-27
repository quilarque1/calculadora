require('dotenv').config();
const express = require('express');
const parser = require('body-parser');

const api = express();

api.use(parser.json());
api.use(parser.urlencoded({ extended: false }));

//routes
api.use(require('./routes/index'));

const puerto = process.env.SERVER_PORT || 3000;
api.listen(puerto, function () {
	console.log('Calculadora is running on port', puerto);
});

module.exports = api;
