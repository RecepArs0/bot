module.exports = {
    name: 'ready',
    once: true,

    /**
     * @param {Client} client 
     */
    async execute(client) {
        
  const { ActivityType } = require('discord.js');  
      // Puts an activity
      setInterval( async () => {
 let am = ""
   if(100 > client.ws.ping) {
     am = "onilne"
   }else if(150 > client.ws.ping) {
     am = "idle"
   }else{
     am = "dnd"
   }
      client.user.setStatus(am);
        //- Shard Id: [ ${client.shard.ids} / 1 ]
      //  let sik = client.guilds.cache.size
         // let server = await client.shard.fetchClientValues('guilds.cache.size')
//Bot is in Beta - ${sik} Servers
        //Bot is in Beta - ${client.guilds.cache.size} Servers - Shard Id: [ ${client.shard.ids} / 1 ]
        client.user.setActivity({
            type: ActivityType.Watching,
            name: `Bot is in Beta - ${client.guilds.cache.size} Servers`,
        //   status: 'dnd' 
        });
     }, 15000)
        // Send a message on the console
        console.log(`[LOG] ${client.user.tag} is now online!\n[LOG] Bot serving on Ready to serve in ${client.guilds.cache.size} servers\n[LOG] Bot serving ${client.users.cache.size} users`);
    }
}