
const express = require('express');
const parser = require('body-parser');

let api = express();
api.use(parser.json());

const puerto = 3000;
api.listen(puerto,() => console.log('Servidor escuchando en puerto ' + puerto));
