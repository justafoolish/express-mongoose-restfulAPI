const express = require('express');
const userRoutes = express.Router()
const { validateLogin, validateRegister } = require('../middlewares/validate.middleware')
const userController = require('../controllers/UserController')

/** POST: /api/user/login - User login */
userRoutes.post('/login', validateLogin, userController.login)

/** POST: /api/user/register - User registration */
userRoutes.post('/register', validateRegister, userController.register)

/** GET: /api/user */
userRoutes.get('/', userController.getUser)

module.exports = userRoutes