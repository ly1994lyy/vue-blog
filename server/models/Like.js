const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    article: { type: mongoose.SchemaTypes.ObjectId, ref: "Article" },
  }
);

module.exports = mongoose.model("Like", schema);
