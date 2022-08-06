const { Schema, model } = require("mongoose");

const schema = Schema({
  role: { type: String, default: "" },
  msg: { type: String, default: "" },
  sw: { type: String, default: "" },
  category: { type: String, default: "" }, 
  });

module.exports = model("ticket", schema);