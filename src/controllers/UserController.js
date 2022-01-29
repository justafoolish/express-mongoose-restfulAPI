const UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

class UserController {
    async login(req, res) {
        //check if email exists
        const user = await UserModel.findOne({ email: req.body.email })
        if (!user) return res.status(400).json({
            success: false,
            message: 'Email is not found'
        });

        //check if password is correct
        const verifyPassword = await user.verifyPassword(req.body.password)
        if (!verifyPassword) return res.status(400).json({
            success: false,
            message: 'Password is incorrect'
        });

        // create and assign a token
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
        res.header('auth-token', token).json({
            success: true,
            token: token
        })

    }
    async register(req, res, next) {
        //check is email duplicate
        const isEmailExist = await UserModel.findOne({ email: req.body.email })
        if (isEmailExist) return res.status(400).send('Email already exists')

        //create new user model
        const newUser = new UserModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        //save data
        newUser
            .save()
            .then(savedUser => res.json(savedUser))
            .catch(next)
    }

    async getUser(req, res, next) {
        const user = await UserModel.findOne({ _id: req.body._id }, {password: 0})
        if (!user) return res.status(400).json({
            success: false,
            message: 'Email is not found'
        });

        return res.json(user)
    }
}

module.exports = new UserController