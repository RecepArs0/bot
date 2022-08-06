const { Schema, model } = require("mongoose");

const schema = Schema({
 // name: { type: String, default: "" },
  data: { type: String, default: "" },
  server: { type: Number, default: "" },
  });

module.exports = model("emoji", schema);