const { Router } = require("express")
const socialController = require("./socialController")

const router = Router()


router.get("/", (req, res) => socialController.getAll(req, res))
router.post("/", (req, res) => socialController.saveSocials(req, res))

module.exports = router