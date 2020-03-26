const express = require('express');

const ONGController = require('./controllers/ONGController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Query Params: parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
 * Route Params: parâmetros usados na identificação de recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
*/

routes.post('/sessions', SessionController.store);

routes.get('/ongs', ONGController.index);
routes.post('/ongs', ONGController.store);

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes