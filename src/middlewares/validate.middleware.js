const { registerSchema, loginSchema } = require('../utils/validate')


// validate login request data
const validateLogin = async (req, res, next) => {
    loginSchema
        .validateAsync(req.body)
        .then(() => next())
        .catch(error =>
            res.status(400).send(error.details[0].message)
        )
}

//validate registration request data
const validateRegister = (req, res, next) => {
    registerSchema
        .validateAsync(req.body)
        .then(() => next())
        .catch(error =>
            res.status(400).send(error.details[0].message)
        );
}

module.exports = {
    validateLogin,
    validateRegister
}