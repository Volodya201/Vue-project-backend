const { Users } = require("../../models/index.js")


class UserService {
    constructor(userRepo) {
        this.userRepo = userRepo
    }


    async getAll() {
        return await this.userRepo.findAll()
    }

    async getOneUsingEmail(email) {
        return await this.userRepo.findOne({where: {email}})
    }

    async createOne(user) {
        await this.userRepo.createOne({...user})
    }

    async deleteOne(id) {
        await this.userRepo.destroy({where: {id}})
    }
}


module.exports = new UserService(Users)