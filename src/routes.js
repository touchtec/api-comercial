const { Router } = require('express');

const routes = new Router();

routes.post('/users', UserController.store);

module.exports = routes;