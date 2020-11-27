
const express = require('express');
const request = require('supertest');
const healthRoute = require('../src/routes/index');
var bodyParser = require('body-parser')

const initApi = () => {
	const app = express();
	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(bodyParser.json())
	app.use(healthRoute);
	return app;
}

describe('GET /health', () => {
	it('should return 200 status code',  (done) => {
		const app = initApi();
		request(app).get('/health').expect(200, done);
	});
});
