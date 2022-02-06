const UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

class UserController {
    async login(req, res) {
        //check if email exists
        const user = await UserModel.findOne({ email: req.body.email.trim() })
        if (!user) return res.status(200).json({
            success: false,
            message: 'Email is not found'
        });

        //check if password is correct
        const verifyPassword = await user.verifyPassword(req.body.password.trim())
        if (!verifyPassword) return res.status(200).json({
            success: false,
            message: 'Password is incorrect'
        });

        // create and assign a token
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
            expiresIn: '1h'
        })
        res.header('token', token).json({
            success: true,
            token: token
        })

    }

    async register(req, res, next) {
        //check is email duplicate
        const isEmailExist = await UserModel.findOne({ email: req.body.email.trim() })
        if (isEmailExist) return res.status(200).json({
            success: false,
            message: 'Email already exists'
        })

        //create new user model
        const newUser = new UserModel({
            name: req.body.name.trim(),
            email: req.body.email.trim(),
            password: req.body.password.trim()
        })

        //save data
        newUser
            .save()
            .then(savedUser => res.json({
                success: true,
                data: savedUser
            }))
            .catch(next)
    }

    async getUser(req, res) {
        const user = await UserModel.findOne({ _id: req.params.id }, { password: 0 })
        if (!user) return res.status(200).json({
            success: false,
            message: 'Email is not found'
        });

        return res.json({ success: true, data: user })
    }

    async getUserList(req, res) {
        const user = await UserModel.find({})

        return res.json({ success: true, data: user })
    }

    removeUser(req, res) {
        UserModel.findByIdAndDelete(req.params.id)
            .then(data => res.json({
                success: true,
                data
            }))
            .catch(err => res.json({
                success: false,
                message: err
            }))

    }

    verifyToken(req, res) {
        res.status(200).json({
            success: true,
            token: req.header('token')
        })
    }
}

module.exports = new UserController