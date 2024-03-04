const UserService = require("../user/userService")
const TokenService = require("../tokens/tokenService")


class AuthService {
    constructor(userService, tokenService) {
        this.userService = userService
        this.tokenService = tokenService
    }

    async register(user) {
        const createdUser = await this.userService.createOne(user)

        const userDTO = {
            id: createdUser.id,
            email: createdUser.email,
            username: createdUser.username
        }

        const tokens = this.tokenService.generateTokens(userDTO)

        return {
            ...tokens,
            user: userDTO
        }
    }


    async login(user) {
        const userDTO = {
            id: user.id,
            email: user.email,
            username: user.username
        }

        const tokens = this.tokenService.generateTokens(userDTO)

        return {
            ...tokens,
            user: userDTO
        }
    }

    async activateUser(activationKey) {
        const user = await this.userService.getOneUsingActivationKey(activationKey)

        await user.update({isActivated: true, activationKey: ""})

        console.log("user", user)

        return user
    }

    async refreshTokens(refreshToken) {
        const {id, email, username} = this.tokenService.validateRefreshToken(refreshToken)

        const tokens = this.tokenService.generateTokens({id, email, username})

        return tokens
    }
}

module.exports = new AuthService(UserService, TokenService)