
const axios = require('axios');

let obtenerOperaciones = (datos) => {
	let listaOperaciones = datos.split(" ")
	console.log('lista de operaciones', listaOperaciones)
	return listaOperaciones;
}

let obtenerOperacion = async (operacion) => {

	return new Promise(async (resolve, reject) => {

		let response = await axios.get('http://localhost:4000/suma/' + operacion)
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

module.exports = { obtenerOperaciones, obtenerOperacion };
