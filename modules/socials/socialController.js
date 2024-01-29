const socialService = require("./socialService.js")

class SocialController {
    constructor(service) {
        this.service = service
    }


    async getAll(req, res) {
        try {
            const socials = await this.service.getAll()

            res.json(socials).status(200)
        } catch (error) {
            res.status(500).json({message: "Непредвиденная ошибка"})
        }
    }


    async saveSocials(req, res) {
        try {
            const { socials } = req.body

            const savedSocials = await this.service.saveSocials(socials)
            res.json(savedSocials).status(201)
        } catch (error) {
            res.status(500).json({message: "Непредвиденная ошибка", error: error.message})
        }
    }
}


module.exports = new SocialController(socialService)