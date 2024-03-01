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

        await user.update({isActivated: true})

        console.log("user", user)

        return user
    }



    generatePassword() {
        const baseForPassword = "qwertyuiopasdfghjklzxcvbnm123456789QWERTYUIOPASDFGHJKLZXCVBNM"
        const newPassword = ""

        for (let index = 0; index < 6; index++) {
            const randomIndex = Math.floor(Math.random() * baseForPassword.length)

            newPassword += baseForPassword[randomIndex]
        }

        return newPassword
    }
}

module.exports = new AuthService(UserService, TokenService)