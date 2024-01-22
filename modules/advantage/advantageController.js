const advantageService = require("./advantageService")

class AdvantageController {

    constructor(advantageService) {
        this.advantageService = advantageService
    }

    async getAll(req, res) {
        try {
            const advantages = await this.advantageService.getAll()
            res.status(200).json(advantages)
        } catch (error) {
            res.status(500).json({message: "Ошибка сервера, повторите запрос позже"})
        }
    }

    async getOne(req, res) {
        try {
            const { advantageId } = req.params
            const advantage = await this.advantageService.getOne(advantageId)
            res.status(200).json(advantage)
        } catch (error) {
            res.status(500).json({message: "Ошибка сервера, повторите запрос позже"})
        }
    }

    async createOne(req, res) {
        const { title, urlImage, description } = req.body
        try {
            const advantage = await this.advantageService.createOne({title, urlImage, description})
            res.status(200).json(advantage)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async deleteOne(req, res) {
        const { id } = req.params
        try {
            await this.advantageService.deleteOne(id)
            res.status(200).json(id)
        } catch (error) {
            res.status(500).json({message: error})
        }
    }

    async editOne(req, res) {
        const { id } = req.params
        const { title, urlImage, description } = req.body
        try {
            const advantage = await this.advantageService.editOne(id, {title, urlImage, description})
            res.status(200).json(advantage)
        } catch (error) {
            res.status(500).json({message: error})
        }
    }

    validateData(conditions) {
        let errors = []

        conditions.forEach(conditionItem => {
            if (!conditionItem.condition) {
                errors.push(conditionItem.message)
            }
        })

        return errors
    }

}

module.exports = new AdvantageController(advantageService)