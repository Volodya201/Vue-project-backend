const sequelize = require("../config/index.js")
const { DataTypes } = require("sequelize")


const Category = sequelize.define("categories", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    urlImage: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
})

const Advantage = sequelize.define("advantages", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    urlImage: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
})

module.exports = {
    Category,
    Advantage
}