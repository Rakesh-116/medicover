const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: String
})

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel
