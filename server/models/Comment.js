const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    commenter: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    article: { type: mongoose.SchemaTypes.ObjectId, ref: "Article" },
    body: { type: String }
  },
  {
    timestamps: {
      createdAt: "created",
      updatedAt: "updated"
    }
  }
);

module.exports = mongoose.model("Comment", schema);
