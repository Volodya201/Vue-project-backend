const Model = require("../../models/index.js")

class AdvantageService {
    constructor(advantageModel) {
        this.advantageModel = advantageModel
    }

    async getAll() {
        return await this.advantageModel.findAll()
    }

    async getOne(advantageId) {
        return await this.advantageModel.findByPk(advantageId)
    }


    async createOne(advantage) {
        return await this.advantageModel.create({...advantage})
    }

    async editOne(id, advantage) {
        const foundAdvantage = await this.advantageModel.findOne({where: {id: id}})
        foundAdvantage.title = advantage.title
        foundAdvantage.urlImage = advantage.urlImage
        foundAdvantage.description = advantage.description
        await foundAdvantage.save()
        return foundAdvantage    
    }


    async deleteOne(id) {
        return await this.advantageModel.destroy({
            where: {id}
        })
    }
}

module.exports = new AdvantageService(Model.Advantage)