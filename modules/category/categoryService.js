const Model = require("../../models/index.js")

class CategoryService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel
    }

    async getAll() {
        return await this.categoryModel.findAll()
    }

    async getOne(categoryId) {
        return await this.categoryModel.findByPk(categoryId)
    }

    async createOne(category) {
        return await this.categoryModel.create({...category})
    }

    async editOne(id, category) {
        const foundCategory = await this.categoryModel.findOne({where: {id: id}})
        foundCategory.title = category.title
        foundCategory.urlImage = category.urlImage
        await foundCategory.save()
        return foundCategory
    }


    async deleteOne(id) {
        return await this.categoryModel.destroy({
            where: {id}
        })
    }
}

module.exports = new CategoryService(Model.Category)