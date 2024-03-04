const { Router } = require("express")
const authController = require("./authController")

const router = Router()

router.post("/register", (req, res) => authController.register(req, res))
router.post("/login", (req, res) => authController.login(req, res))
router.patch("/activate/:key", (req, res) => authController.activateUser(req, res))
router.post("/reset-password", (req, res) => {authController.resetPassword(req, res)})
router.patch("/confirm-password/:key", (req, res) => {authController.confirmPassword(req, res)})
router.get("/refresh", (req, res) => {authController.refreshTokens(req, res)})


module.exports = router