const phoneService = require("./phoneService.js")

class PhoneController {
    constructor(service) {
        this.service = service
    }


    async getAll(req, res) {
        try {
            const phones = await this.service.getAll()

            res.json(phones).status(200)
        } catch (error) {
            res.status(500).json({message: "Непредвиденная ошибка"})
        }
    }


    async savePhones(req, res) {
        try {
            const { phones } = req.body

            const savedPhones = await this.service.savePhones(phones)
            res.json(savedPhones).status(201)
        } catch (error) {
            res.status(500).json({message: "Непредвиденная ошибка"})
        }
    }
}


module.exports = new PhoneController(phoneService)