const Joi = require('joi');

const RegisterValidation = (payload) => {
    const schema = Joi.object({
        name: Joi.string().max(255).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(255).required()
    });

    return schema.validate(payload);
}

const LoginValidation = (payload) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    return schema.validate(payload);
}

module.exports = {RegisterValidation, LoginValidation};