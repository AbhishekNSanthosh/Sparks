const mongoose = require('mongoose')
const { Schema } = mongoose;

const EventRegistrationSchema = new Schema({
  registeredBy: { type: mongoose.Types.ObjectId, ref: 'User' },
  eventName: { type: String },
  eventDep: { type: String, enum: ["cse", "eee", "mech", "civil", "bsc"] },
  registeredAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("EventRegistration", EventRegistrationSchema)