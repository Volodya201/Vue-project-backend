const { Phone } = require("../../models/index.js")

class PhoneService {
    constructor(model) {
        this.model = model
    }

    async getAll() {
        return await this.model.findAll()
    }


    async savePhones(phones) {
        await this.model.truncate()

        return await this.model.bulkCreate(phones)
    }
}


module.exports = new PhoneService(Phone)