const express = require("express")
const app = express()
const cors = require("cors")
const sequelize = require("./config/index.js")
const router = require("./router/index")
const bodyParser = require("body-parser")


app.use(cors())
app.use(express.json())
app.use(router)


async function startApp() {
    try {
        await sequelize.sync()
    } catch(error) {
        console.log("Sequelize error: " + error)
    }

    try {
        app.listen(3000, () => console.log("Server is working"))
    } catch(error) {
        console.log("Start error: " + error)
    }
}

startApp()
