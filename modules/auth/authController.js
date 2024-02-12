const { AuthService } = require("./authService")
const { UserService } = require("../user/userService")
const bcrypt = require("bcrypt")

class AuthController {
    constructor(authService, userService, bcrypt) {
        this.authService = authService
        this.userService = userService
        this.bcrypt = bcrypt
    }


    async register(req, res) {
        try {
            const { email, username, password } = req.body

            const foundUser = await this.userService.getOneUsingEmail(email)

            if (foundUser) throw new Error("Пользователь с таким емайлом уже существует")

            const hashPassword = await this.bcrypt.hash(password, 5)

            const tokens = await this.authService.register({email, username, password: hashPassword})
            
            res.status(201).json(tokens)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
}

module.exports = new AuthController(AuthService, UserService, bcrypt)