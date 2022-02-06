const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.header('token')

    if (!token) return res.status(200).json({
        success: false,
        message: 'Invalid token'
    });

    try {
        const validate = jwt.verify(token, process.env.TOKEN_SECRET);

        req.user = validate._id

        next();
    } catch (err) {
        res.status(200).json({
            success: false,
            message: 'Invalid token'
        });
    }
}

module.exports = { verifyToken }