var jwt = require('jsonwebtoken')
var logger = require('./logger')

exports.generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
}

exports.validateToken = (req, res, next) => {
    if (process.env.DISABLE_API_AUTH == "true") {
        next()
    } else {
        if (req.headers["authorization"] == null) {
            logger.error(`URL : ${req.originalUrl} | API Authentication Fail | message: Token not present`)
            res.status(403).json({
                message: "Token not present"
            })
        } else {
            const authHeader = req.headers["authorization"]
            const token = authHeader.split(" ")[1]
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
                if (err) {
                    logger.error(`URL : ${req.originalUrl} | API Authentication Fail | message: Invalid Token`)
                    res.sendStatus(403).json({
                        message: "Invalid Token"
                    })
                    res.end();
                } else {
                    req.user = user
                    next()
                }
            })
        }
    }
}

exports.validateUser = (user, emailId) => {
    if (process.env.DISABLE_API_AUTH != "true" &&
        user != emailId
    ) {
        var err = new Error("Access Denied")
        err.status = 403
        throw err
    } else
        return true
}
