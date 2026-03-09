const express = require("express")
const verifyToken = require("../middlewares/auth.Middleware")
const authRole = require('../middlewares/Role.middleware')
const router = express.Router()

//admin access this file
router.get("/admin", verifyToken, authRole("admin"), (req, res) => {
    res.json("Wellcome to Admin")
})


//manager and admin access this file
router.get("/manager", verifyToken, authRole("admin", "manager"), (req, res) => {
    res.json("Wellcome to manager")
})

//All access this file
router.get("/user", verifyToken, authRole("admin", "manager", "user"), (req, res) => {
    res.json("Wellcome to user")
})


module.exports = router