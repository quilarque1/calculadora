const  { obtenerOperaciones,
	     obtenerOperacionSuma,
		 obtenerOperacionResta,
		 obtenerOperacionMultiplicar,
		 obtenerOperacionDividir
       } = require('../utils/calculadora');

const { calculadoraDto } = require('../dto/calculadoraDto');

class CalculadoraService {

	async getOperaciones(datos) {
		let listaOperaciones = obtenerOperaciones(datos)
		let resultado1 = await this.getPrimeraOperacion(listaOperaciones);
		console.log('Resultado de la primera operacion: ',resultado1)

		let resultado2 = await this.getSegundaOperacion(listaOperaciones);
		console.log('Resultado de la segunda operacion: ',resultado2)

		let resultado3 = await this.getTerceraOperacion(listaOperaciones);
		console.log('Resultado de la tercera operacion: ',resultado3)

		let obj = [];
		obj.push({operacion: listaOperaciones[0], resultado: resultado1},
			     {operacion: listaOperaciones[1], resultado: resultado2},
			     {operacion: listaOperaciones[2], resultado: resultado3});
		return calculadoraDto(obj) || [];
	}

	async getPrimeraOperacion(listaOperaciones) {

		let primeraOperacion = listaOperaciones[0];
		console.log('primeraOperacion: ', primeraOperacion)
		let arrayMultiplicar = primeraOperacion.split('+');
		let arrayOperaionMultiplicar = arrayMultiplicar[0];
		let resultadoMultiplicacionPrimeraOperacion = await obtenerOperacionMultiplicar(arrayOperaionMultiplicar);
		console.log('Resultado primer paso Multiplicacion: ', resultadoMultiplicacionPrimeraOperacion);

		let arraySuma = [resultadoMultiplicacionPrimeraOperacion +'+'+ arrayMultiplicar[1].split('-')[0]];
		let resultadoSumarPrimeraOperacion = await obtenerOperacionSuma(arraySuma);
		console.log('resultadoSumarPrimeraOperacion: ', resultadoSumarPrimeraOperacion)

		let arrayResta = [resultadoSumarPrimeraOperacion +'-'+ arrayMultiplicar[1].split('-')[1]];
		let resultadoRestarPrimeraOperacion = await obtenerOperacionResta(arrayResta);
		console.log('resultadoRestarPrimeraOperacion: ', resultadoRestarPrimeraOperacion)

		return resultadoRestarPrimeraOperacion;
	}

	async getSegundaOperacion(listaOperaciones) {
		return await obtenerOperacionSuma(listaOperaciones[1]);
	}

	async getTerceraOperacion(listaOperaciones) {

		let terceraOperacion = listaOperaciones[2];
		console.log('terceraOperacion: ', terceraOperacion)
		let arrayDividir = terceraOperacion.split('+');
		let arrayOperaionDividir = arrayDividir[0];
		let resultadoDividirTerceraOperacion = await obtenerOperacionDividir(arrayOperaionDividir);
		console.log('Resultado primer paso Division: ', resultadoDividirTerceraOperacion);

		let arraySuma = [resultadoDividirTerceraOperacion +'+'+ arrayDividir[1].split('-')[0]];
		let resultadoSumarTerceraOperacion = await obtenerOperacionSuma(arraySuma);
		console.log('resultadoSumarTerceraOperacion: ', resultadoSumarTerceraOperacion)

		let arrayResta = [resultadoSumarTerceraOperacion +'-'+ arrayDividir[1].split('-')[1]];
		let resultadoRestarTerceraOperacion = await obtenerOperacionResta(arrayResta);
		console.log('resultadoRestarTerceraOperacion: ', resultadoRestarTerceraOperacion)

		return resultadoRestarTerceraOperacion;
	}
}

module.exports = CalculadoraService;
