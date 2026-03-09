const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        require: [true, "To create account username is required"]
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "manager", "user"]
    }
}, {
    timestamps: true
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel
