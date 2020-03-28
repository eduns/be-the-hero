const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const OngValidator = require('./validators/OngValidator');
const IncidentValidator = require('./validators/IncidentValidator');
const ProfileValidator = require('./validators/ProfileValidator');

const routes = express.Router();

/**
 * Query Params: parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
 * Route Params: parâmetros usados na identificação de recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
*/

/** Rotas das sessões */
routes.post('/sessions', SessionController.store);


/** Rotas das ONGs */
routes.get('/ongs', OngController.index);

routes.post('/ongs',
    OngValidator.storeOng(),
    OngController.store);

routes.get('/incidents',
    IncidentValidator.indexIncidents(),
    IncidentController.index);


/** Rotas dos casos */
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id',
    IncidentValidator.deleteIncident(),
    IncidentController.delete);


/** Rotas de casos específicos de uma ONG */
routes.get('/profile', ProfileValidator.indexProfile(), ProfileController.index);

module.exports = routes