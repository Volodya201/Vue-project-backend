const tokenService = require("../modules/tokens/tokenService.js")

module.exports = function authMiddleware(req, res, next) {
    try {
        const headers = req.headers.authorization

        if (!headers) throw new Error("Пользователь неавторизован")

        const token = headers.split(" ")[1]

        const userData = tokenService.validateAccessToken(token)

        if (!userData) throw new Error("Пользователь неавторизован")

        req.user = userData

        next()
    } catch (error) {
        res.status(401).json(error.message)
    }
}