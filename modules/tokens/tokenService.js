const JWT = require("jsonwebtoken")

class TokenService {
    constructor(jwt) {
        this.jwt = jwt
    }

    generateTokens(userData) {
        const accessToken = this.jwt.sign(userData, "accessToken", {expiresIn: "1h"})
        const refreshToken = this.jwt.sign(userData, "refreshToken", {expiresIn: "1h"})

        return {
            accessToken,
            refreshToken
        }
    }


    validateAccessToken(accessToken) {
        return this.jwt.verify(accessToken, "accessToken")
    }

    validateRefreshToken(refreshToken) {
        return this.jwt.verify(refreshToken, "refreshToken")
    }
}


module.exports = new TokenService(JWT)