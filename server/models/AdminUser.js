const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    set(val) {
      return require("bcrypt").hashSync(val, 10);
    }
  }
});

module.exports = mongoose.model("AdminUser", schema);