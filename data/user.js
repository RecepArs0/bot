const mongoose = require("mongoose");

// The heart of the User, here is everything saved that the User does.
// Such as Levels, Courses, Premium, Enrolled, XP, Leaderboard.
const user = mongoose.Schema({
  ispremium: {
    type: mongoose.SchemaTypes.Boolean,
    default: false,
  },
  
    redeemedBy: {
      type: mongoose.SchemaTypes.Number,
      default: null,
    },

    redeemedAt: {
      type: mongoose.SchemaTypes.Number,
      default: null,
    },

    expiresAt: {
      type: mongoose.SchemaTypes.Number,
      default: null,
    },

    plan: {
      type: mongoose.SchemaTypes.String,
      default: null,
    },
 
});
module.exports = mongoose.model("preuser", user);