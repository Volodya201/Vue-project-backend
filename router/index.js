const { Router } = require("express")

const categoryRoutes = require("../modules/category/categoryRoutes")
const advantageRoutes = require("../modules/advantage/advantageRoutes")

const router = Router()

router.use("/categories", categoryRoutes)
router.use("/advantages", advantageRoutes)

module.exports = router