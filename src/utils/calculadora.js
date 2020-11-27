
const axios = require('axios');

let obtenerOperaciones = (datos) => {
	let listaOperaciones = datos.split(" ")
	console.log('lista de operaciones', listaOperaciones)
	return listaOperaciones;
}

let obtenerOperacionSuma = async (operacion) => {

	return new Promise(async (resolve, reject) => {

		let response = await axios.get('http://host.docker.internal:4000/suma/' + operacion)
			.then((response ) => {

				if (response.status === 200) {
					console.log('Consulta a api de suma exitosa: ', response.data);
					return response.data.suma.resultado;
				}
			}).catch((e) => {
			console.log('Error consultando api de suma 2', e.message);
			reject(e.message);
		})
		resolve(response);
	});
}

let obtenerOperacionResta = async (operacion) => {

	return new Promise(async (resolve, reject) => {

		let response = await axios.get('http://host.docker.internal:5000/resta/' + operacion)
			.then((response ) => {

				if (response.status === 200) {
					console.log('Consulta a api de resta exitosa: ', response.data);
					return response.data.resta.resultado;
				}
			}).catch((e) => {
				console.log('Error consultando api de resta: ', e.message);
				reject(e.message);
			})
		resolve(response);
	});
}

let obtenerOperacionMultiplicar = async (operacion) => {

	return new Promise(async (resolve, reject) => {

		let response = await axios.get('http://host.docker.internal:6000/multiplicacion/' + operacion)
			.then((response ) => {

				if (response.status === 200) {
					console.log('Consulta a api de multiplicacion exitosa: ', response.data);
					return response.data.multiplicacion.resultado;
				}
			}).catch((e) => {
				console.log('Error consultando api de multiplicacion: ', e.message);
				reject(e.message);
			})
		resolve(response);
	});
}

let obtenerOperacionDividir = async (operacion) => {

	return new Promise(async (resolve, reject) => {

		let response = await axios.get('http://host.docker.internal:7000/division?operacion=' + operacion)
			.then((response ) => {

				if (response.status === 200) {
					console.log('Consulta a api de division exitosa: ', response.data);
					return response.data.division.resultado;
				}
			}).catch((e) => {
				console.log('Error consultando api de division: ', e.message);
				reject(e.message);
			})
		resolve(response);
	});
}

module.exports = { obtenerOperaciones, obtenerOperacionSuma, obtenerOperacionResta, obtenerOperacionMultiplicar, obtenerOperacionDividir };
