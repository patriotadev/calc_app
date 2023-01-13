const Jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json({
        "status": "failed",
        "message": "access denied."
    });

    try {
        const verified = Jwt.verified(token, process.env.ACCESS_TOKEN);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({
            "status": "failed",
            "message": "invalid token."
        })
    }
}