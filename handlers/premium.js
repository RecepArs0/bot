// Define the User from our Database Schema
const User = require("../data/user");
const cron = require("node-cron");

// set the schedule, find the user in the database.
module.exports = async (client) => {
  cron.schedule("*/60 * * * * *", async () => {
    await User.find({ ispremium: true }, async (err, users) => {
      
      if (users && users.length) {
        // Set the expire Date and Time for our User + Code
        for (let user of users) {
          let date = new Date;
const dateStr1 = date.toLocaleString('en-US', { timeZone: 'Asia/Baghdad'});          
const date1 = new Date(dateStr1);
const timestamp = date1.getTime();

          if (timestamp >= user.expiresAt) {
            // Default: The user is not a premium User
            /*
            user.isPremium = false;
            user.redeemedBy = [];
            user.redeemedAt = null;
            user.expiresAt = null;
            user.plan = null;
*/
            // Save the updated user within the usersSettings.
                           await user.deleteOne().catch(() => {});
/*            const newUser = await client.userdata({ 
           isPremium:  false,
            redeemedBy:  null,
            redeemedAt: null,
            expiresAt:  null,
            plan:  null
  
            }).save()
            
 client.usersSettings.set(newUser.Id, newUser);
 */
          }
        }
      }
    });
  });
};