const { Router } = require("express")
const phoneController = require("./phoneController")

const router = Router()


router.get("/", (req, res) => phoneController.getAll(req, res))
router.post("/", (req, res) => phoneController.savePhones(req, res))

module.exports = router