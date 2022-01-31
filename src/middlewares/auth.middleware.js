const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')

    if (!token) return res.status(400).json({
        success: false,
        message: 'Access Denied'
    });

    try {
        const validate = jwt.verify(token, process.env.TOKEN_SECRET);

        req.user = validate._id

        next();
    } catch (err) {
        res.status(400).json({
            success: false,
            message: 'Invalid token'
        });
    }
}

module.exports = { verifyToken }