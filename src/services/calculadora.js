const  { obtenerOperaciones } = require('../utils/calculadora');
const { calculadoraDto } = require('../dto/calculadoraDto');

class CalculadoraService {

	getOperaciones(datos) {
		let resultado = obtenerOperaciones(datos)
		return calculadoraDto(datos, resultado) || {};
	}
}

module.exports = CalculadoraService;
