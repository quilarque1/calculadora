let calculadoraDto = (object) => {
	return [
		{
			"operacion": object[0].operacion,
			"resultado": object[0].resultado
		},
		{
			"operacion":object[1].operacion,
			"resultado": object[1].resultado
		},
		{
			"operacion":object[2].operacion,
			"resultado": object[2].resultado
		}
	]
}

module.exports = { calculadoraDto };
