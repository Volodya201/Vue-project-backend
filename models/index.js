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


const Phone = sequelize.define("phones", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    phone: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
})

const Social = sequelize.define("solials", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    urlIcon: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = {
    Category,
    Advantage,
    Phone,
    Social
}