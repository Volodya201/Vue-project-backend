const { authController } = require("./authController")

const { Router } = require("express")

const router = Router()

router.post("/register", (req, res) => authController.register(req, res))


module.exports = router