const mongoose = require("mongoose");

// The heart of the User, here is everything saved that the User does.
// Such as Levels, Courses, Premium, Enrolled, XP, Leaderboard.
const user = mongoose.Schema({
  
    userid: {
      type: mongoose.SchemaTypes.String,
      
    },

 
  
    isblist: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
 
});
module.exports = mongoose.model("blist", user);