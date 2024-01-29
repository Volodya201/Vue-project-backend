const categoryService = require("./categoryService.js")

class CategoryController {

    constructor(categoryService) {
        this.categoryService = categoryService
    }

    async getAll(req, res) {
        try {
            const categories = await this.categoryService.getAll()
            res.status(200).json(categories)
        } catch (error) {
            res.status(500).json({message: "Ошибка сервера, повторите запрос позже"})
        }
    }

    async getOne(req, res) {
        try {
            const { categoryId } = req.params
            const category = await this.categoryService.getOne(categoryId)
            res.status(200).json(category)
        } catch (error) {
            res.status(500).json({message: "Ошибка сервера, повторите запрос позже"})
        }
    }

    async createOne(req, res) {
        const { title, urlImage } = req.body
        try {
            const errors = this.validateData([
                {condition: title.length > 3, message: "Длина названия должна быть больше трех символов!"},
                {condition: /(http|https):\/\//.test(urlImage), message: "Некоррекный url!"}
            ])
            
            if (errors.length > 0) throw new Error(JSON.stringify(errors))

            const category = await this.categoryService.createOne({title, urlImage})
            res.status(200).json(category)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async deleteOne(req, res) {
        const { id } = req.params
        try {
            await this.categoryService.deleteOne(id)
            res.status(200).json(id)
        } catch (error) {
            res.status(500).json({message: error})
        }
    }

    async editOne(req, res) {
        const { id } = req.params
        const { title, urlImage } = req.body
        try {
            const category = await this.categoryService.editOne(id, {title, urlImage})
            res.status(200).json(category)
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

module.exports = new CategoryController(categoryService)