const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
	res.json({ status: "Calculadora is Up!!" });
});

module.exports = router;
