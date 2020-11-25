
const express = require('express');
const parser = require('body-parser');

let api = express();
api.use(parser.json());

api.get('/health', function (req, res) {
	res.send('calculadora is up');
});

const puerto = 3000;
api.listen(puerto);
