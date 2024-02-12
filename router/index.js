const { Router } = require("express")

const categoryRoutes = require("../modules/category/categoryRoutes")
const advantageRoutes = require("../modules/advantage/advantageRoutes")
const phoneRoutes = require("../modules/phones/phoneRoutes")
const socialRoutes = require("../modules/socials/socialRoutes")
const authRoutes = require("../modules/auth/authRoutes")

const router = Router()

router.use("/categories", categoryRoutes)
router.use("/advantages", advantageRoutes)
router.use("/phones", phoneRoutes)
router.use("/socials", socialRoutes)
router.use("/auth", authRoutes)

module.exports = router