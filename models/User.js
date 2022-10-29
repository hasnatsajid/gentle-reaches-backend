const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  balance: {
    type: Number,
    default: 0,
  },
  release1: {
    type: String,
    default: '',
  },
  release2: {
    type: String,
    default: '',
  },
  address: {
    type: String,
    default: 0,
  },
  keys: {
    type: String,
    default: 0,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
