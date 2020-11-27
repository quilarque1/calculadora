const express = require('express');
const router = express.Router();
const CalculadoraService = require('../services/calculadora');

router.get('/health', (req, res) => {
	res.json({ status: "Calculadora is Up!!" });
});

router.post('/calcular', async (req, res, next) => {

	try {
		const calculadoraService = new CalculadoraService();

		if(!req.body.calcular) {
			return res.status(400).send({
				success: 'false',
				message: 'calcular es requerido'
			});
		} else {
			console.log('Operacion a resolver: ', req.body);

			res.status(200).json({
				ouput: await calculadoraService.getOperaciones(req.body.calcular)
			});
		}

	} catch (e) {
		next(e);
	}
});

module.exports = router;
