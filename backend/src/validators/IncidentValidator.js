const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    indexIncidents() {
        return celebrate({
            [Segments.QUERY]: Joi.object().keys({
                page: Joi.number(),
            })
        })
    },

    deleteIncident() {
        return celebrate({
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number().required()
            })
        })
    }
}