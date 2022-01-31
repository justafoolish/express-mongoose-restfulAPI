const { registerSchema, loginSchema, filtersSchema } = require('../utils/validate')


// validate login request data
const validateLogin = async (req, res, next) => {
    loginSchema
        .validateAsync(req.body)
        .then(() => next())
        .catch(error =>
            res.status(400).json({
                success: false,
                message: error.details[0].message
            })
        )
}

// validate registration request data
const validateRegister = async (req, res, next) => {
    registerSchema
        .validateAsync(req.body)
        .then(() => next())
        .catch(error =>
            res.status(400).json({
                success: false,
                message: error.details[0].message
            })
        );
}

// validate filter params: _page _limit _order _sort
const validateFilterParams = async (req, res, next) => {
    filtersSchema
        .validateAsync(req.query)
        .then(() => next())
        .catch(error =>
            res.status(400).json({
                success: false,
                message: error.details[0].message
            })
        )
}

module.exports = {
    validateLogin,
    validateRegister,
    validateFilterParams
}