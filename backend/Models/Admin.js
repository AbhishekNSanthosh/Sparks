const mongoose = require('mongoose')
const { Schema } = mongoose;

const AdminSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    adminDep: { type: String, enum: ["cse", "eee", "mech", "civil", "bsc"] },
    createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Admin", AdminSchema)