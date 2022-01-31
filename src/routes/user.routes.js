const express = require('express');
const userRoutes = express.Router()
const { validateLogin, validateRegister } = require('../middlewares/validate.middleware')
const auth = require('../middlewares/auth.middleware')
const userController = require('../controllers/UserController')

userRoutes
    /** POST: /api/user/register - User registration */
    .post('/register', validateRegister, userController.register)

    /** POST: /api/user/login - User login */
    .post('/login', validateLogin, userController.login)

    /** GET: /api/user - Get list users */
    .get('/', auth.verifyToken, userController.getUserList)

    /** GET: /api/user/:id - Get specific user by id */
    .get('/:id',auth.verifyToken, userController.getUser)

    /** DELETE: /api/user/:id - Delete user */
    .delete('/:id',auth.verifyToken, userController.removeUser)


module.exports = userRoutes