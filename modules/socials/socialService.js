const { Social } = require("../../models/index.js")

class SocialService {
    constructor(model) {
        this.model = model
    }

    async getAll() {
        return await this.model.findAll()
    }


    async saveSocials(socials) {
        await this.model.truncate()

        return await this.model.bulkCreate(socials)
    }
}


module.exports = new SocialService(Social)