const { Schema, model } = require("mongoose");

const schema = Schema({
  role: { type: String, default: "" },
  msg: { type: String, default: "" },
  sw: { type: String, default: "" },
  btid: { type: Number, default: "" },
  });

module.exports = model("roles", schema);