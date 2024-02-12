const { UserService } = require("../user/userService")
const { TokenService } = require("../tokens/tokenService")


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
}

module.exports = new AuthService(UserService, TokenService)