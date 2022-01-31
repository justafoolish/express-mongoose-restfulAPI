const Joi = require('joi')

const registerSchema = Joi.object({
    email: Joi.string().min(8).max(255).email().required(),
    password: Joi.string().min(6).max(255).required(),
    name: Joi.string().max(255).required(),
})

const loginSchema = Joi.object({
    email: Joi.string().min(8).max(255).email().required(),
    password: Joi.string().min(6).max(255).required(),
})

const filtersSchema = Joi.object({
    _limit: Joi.number().integer().greater(0).min(1).positive(),
    _page: Joi.number().integer().greater(0).min(1).positive(),
    _sort: Joi.string(),
    _order: Joi.string(),
}).pattern(/[\D_like]/, Joi.string().allow(''));


module.exports = {
    registerSchema,
    loginSchema,
    filtersSchema
}

//Note: route param can be validate here