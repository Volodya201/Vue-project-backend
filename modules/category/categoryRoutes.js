const { Router } = require("express")
const categoryController = require("./categoryController")

const router = Router()


router.get("/", (req, res) => categoryController.getAll(req, res))
router.get("/:categoryId", (req, res) => categoryController.getOne(req, res))
router.post("/", (req, res) => categoryController.createOne(req, res))
router.delete("/:id", (req, res) => categoryController.deleteOne(req, res))
router.patch("/:id", (req, res) => categoryController.editOne(req, res))

module.exports = router