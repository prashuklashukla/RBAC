const express = require('express')
const app = express()
const authRouter = require('./routes/auth.route')
const userRouter = require("./routes/user.route")


//middlerware
app.use(express.json())

//ROUTER
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)



module.exports = app