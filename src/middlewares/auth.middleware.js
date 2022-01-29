const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
    const token = req.header('auth-token')

    if (!token) return res.status(400).send('Access Denied');

    try {
        const validate = jwt.verify(token, process.env.TOKEN_SECRET);

        req.user = validate

        next();
    } catch (err) {
        res.status(400).send('Invalid token');
    }
}

module.exports = { verify }