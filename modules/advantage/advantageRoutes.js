const { Router } = require("express")
const advantageController = require("./advantageController")

const router = Router()


router.get("/", (req, res) => advantageController.getAll(req, res))
router.get("/:advantageId", (req, res) => advantageController.getOne(req, res))
router.post("/", (req, res) => advantageController.createOne(req, res))
router.delete("/:id", (req, res) => advantageController.deleteOne(req, res))
router.patch("/:id", (req, res) => advantageController.editOne(req, res))

module.exports = router