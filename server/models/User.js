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

schema.virtual('likes',{
  localField:'_id',
  foreignField:"user",
  justOne:false,
  ref:'Like'
})

module.exports = mongoose.model("User", schema);
