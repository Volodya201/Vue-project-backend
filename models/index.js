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

const Social = sequelize.define("socials", {
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



const Users = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false
    },
    isActivated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    activationKey: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    newPassword: {
        type: DataTypes.STRING,
        unique: false
    },
    confirmKey: {
        type: DataTypes.TEXT,
        allowNull: true
    }
})

module.exports = {
    Category,
    Advantage,
    Phone,
    Social,
    Users
}