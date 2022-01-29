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


module.exports = {
    registerSchema,
    loginSchema
}

//Note: route param can be validate here