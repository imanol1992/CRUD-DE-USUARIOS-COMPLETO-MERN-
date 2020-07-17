const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Modelo para nuestro Usuario

const UserSchema = Schema({
  name: String,
  lastname: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: String,
  active: Boolean,
  avatar:String
});

module.exports = mongoose.model("User", UserSchema);
