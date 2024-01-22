const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("crm-flowers-database", "postgres", "pgvova11", {
    dialect: "postgres",
    host: "localhost"
})


module.exports = sequelize