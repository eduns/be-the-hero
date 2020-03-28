const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    storeOng() {
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().required().email(),
                whatsapp: Joi.string().required().min(10).max(13).regex(/^[0-9]*$/, { name: 'whatsapp' }),
                city: Joi.string().required(),
                uf: Joi.string().required().length(2),
            })
        })
    }
}