const AuthService = require("./authService")
const UserService = require("../user/userService")
const bcrypt = require("bcrypt")
const transporter = require("../../config/nodemailer")
const { v4: uuidv4 } = require('uuid')

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
            const activationKey = uuidv4()

            const tokens = await this.authService.register({email, username, password: hashPassword, activationKey})

            const emailOptions = {
                from: "yt.volodyago@gmail.com",
                to: email,
                subject: "Активируйте свой аккаунт в crm-flowers",
                html: `<div>
                    <h1>Просто перейдите по этой <a href="http://localhost:8080/auth/${activationKey}">ссылке</a></h1>
                </div>`
            }

            transporter.sendMail(emailOptions, (error, info) => {
                if (error) {
                    res.status(500).json("Произошла непредвиденная ошибка")
                    console.log(error)
                } else {
                    res.status(201).json(tokens)
                }
            })

        } catch (error) {
            res.status(400).json(error.message)
        }
    }


    async login(req, res) {
        try {
            const { email, password } = req.body

            const candidate = await this.userService.getOneUsingEmail(email)


            if (!candidate) throw new Error("Пользователя с таким имейлом не существует!")

            const isCompare = await this.bcrypt.compare(password, candidate.password)


            if (!isCompare || !candidate.isActivated) {
                throw new Error("Имейл или пароль неверен")
            }

            const tokens = await this.authService.login(candidate)

            res.cookie("refreshToken", tokens.refreshToken, {httpOnly: true})
            res.status(200).json(tokens)
        } catch (error) {
            res.status(404).json({message: error.message})
        }
    }


    async activateUser(req, res) {
        try {
            const { key } = req.params
            const user = await this.authService.activateUser(key)

            res.status(200).json("Активация прошла успешно")
        } catch (error) {
            res.status(500).json("Ошибка активации")
        }
    }

    async resetPassword(req, res) {
        try {
            const { email } = req.body

            const candidate = await this.userService.getOneUsingEmail(email)

            if (!candidate) throw new Error("Пользователя с таким имейлом не существует!")

            const newPassword = this.authService.generatePassword()

            const hashPassword = this.bcrypt.hash(newPassword, 5)

            candidate.update({password: hashPassword})

            const emailOptions = {
                from: "yt.volodyago@gmail.com",
                to: email,
                subject: "Ваш пароль обновлён в аккаунте crm-flowers",
                html: `<div>
                    <h1>Ваш новый пароль: ${newPassword}</h1>
                    <p><a href="localhost:8080/login">Ссылка на вход в аккаунт</a></p>
                </div>`
            }

            transporter.sendMail(emailOptions, (error, info) => {
                if (error) {
                    res.status(500).json("Произошла непредвиденная ошибка")
                    console.log(error)
                } else {
                    res.status(201).json("Пароль успешно обновлён")
                }
            })
        } catch (error) {
            res.status(404).json(error.message)
        }
    }
}

module.exports = new AuthController(AuthService, UserService, bcrypt)