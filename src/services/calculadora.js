const  { obtenerOperaciones, obtenerOperacion } = require('../utils/calculadora');
const { calculadoraDto } = require('../dto/calculadoraDto');

class CalculadoraService {

	async getOperaciones(datos) {
		let listaOperaciones = obtenerOperaciones(datos)
		let resultado = await obtenerOperacion(listaOperaciones[1]);
		console.log('Resultado de la operacion:', resultado)
		return calculadoraDto(listaOperaciones[1], resultado) || {};
	}
}

module.exports = CalculadoraService;
