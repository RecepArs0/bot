
const { messageManager, Client, Collection, EmbedBuilder, InteractionType } = require('discord.js');
const fs = require('fs');
const express = require("express");
const ms = require('ms');
const app = express();
const fetch = require("node-fetch");
const { SlashCommandBuilder } = require('@discordjs/builders');
  const { ActionRowBuilder, MessageAttachment, SelectMenuBuilder, ButtonBuilder } = require('discord.js');
  const moment = require("moment");
require("moment-duration-format");
//moment.locale("tr-cardinal-date");
const client = new Client({
    intents: [
        "Guilds",
        "GuildMembers",
        "GuildBans",
        "GuildIntegrations",
        "GuildWebhooks",
        "GuildInvites",
        "GuildVoiceStates",
        "GuildPresences",
        "GuildMessages",
        "GuildMessageReactions",
        "GuildMessageTyping",
        "DirectMessages",
        "DirectMessageReactions",
        "DirectMessageTyping",
        "MessageContent"
    ],
});
require("./settings.js")(client);
client.on("ready", () => {
  
    // Place your code here
   client.user.setActivity(`/help - /shard`, {
            type: "WATCHING",
            
        //   status: 'dnd' 
        });
  });
const mongoose = require("mongoose");
mongoose.connect('', {

  useNewUrlParser: true, 

useUnifiedTopology: true 
});

mongoose.connection.on("connected", () => {
	console.log("connected to DB");
});

mongoose.connection.on("error", () => {
	console.error("connection Error!");
});

client.page = require("./utility/pagination");
client.emojisdata = require("./data/emoji.js");
client.rolesdata = require("./data/roles.js");
client.ticketData = require("./data/ticket.js");
client.botdata = require("./data/bot.js");
client.blistdata = require("./data/blist.js");
client.codedata = require("./data/code");
client.userdata = require("./data/user");
client.userSettings = new Collection();
client.data = new Collection();
client.slashs = new Collection();
client.slashstr = new Collection();
const handlers = fs.readdirSync('./handlers').filter(file => file.endsWith('.js'));
const slashsFolders = fs.readdirSync('./commands');


for (file of handlers) {
    require(`./handlers/${file}`)(client);
}
client.slashCommands(slashsFolders, './commands');
/*process.on("uncaughtException", (err) => {
   console.log("Uncaught Exception: " + err);
});
  
process.on("unhandledRejection", (reason, promise) => {
    
  console.log("[FATAL] Possibly Unhandled Rejection at: Promise ", promise, " reason: ", reason.message);
  
  
})
*/
/*
client.on('ready', async (message) => {
 
setInterval( async () => {
  let ping = await client.shard.fetchClientValues('ws.ping')
  let server = await client.shard.fetchClientValues('guilds.cache.size')
  let user = await client.shard.fetchClientValues('users.cache.size') 
  let uptime = await client.shard.fetchClientValues("uptime")
  let channel = await client.shard.fetchClientValues("channels.cache.size")
  let embed = new EmbedBuilder()
  let i = client.shard.ids
  let durum = ""
   if(100 > client.ws.ping) {
     durum = "<a:i_:972475811200401448>"
   }else if(150 > client.ws.ping) {
     durum = "<a:n_:972475950086373479>"
   }else{
     durum = "<a:h_:972476061231218718>"
   }
  for(i=0;i<client.shard.count;i++) {
    
const kanal = "1000001894959284304" // db.get("istatistik.kanal");
  const mesajid = "1000001933274259486" // db.get("istatistik.msg");
  let botkanal = client.channels.cache.find(c => c.id === kanal);
  for(i=0;i<client.shard.count;i++) {
    
 embed.setTitle("<:vds:972482540881473568>Shard info")
  .setTimestamp()
  .setColor(client.settings.embedcolor)
  .addFields(
              {
                name: `${durum} Shard ( ${i+1} )`,
                value: `<:lan:972481779137151046> Servers: **${server[i]}** \n<:mal:972483443239837706> Users: **${user[i]}** \n🏓 Ping: **${Math.round(ping[i])}** \n<a:emoji_22:892511440370544691> Uptime: **${moment.duration(uptime[i]).format(` D [Day], H [Hour], m [Minute], s [Second]`)}**`,
              },
            )
  //.addField(`${durum} Shard ( ${i+1} )`, `<:lan:972481779137151046> Servers: **${server[i]}** \n<:mal:972483443239837706> Users: **${user[i]}** \n🏓 Ping: **${Math.round(ping[i])}** \n<a:emoji_22:892511440370544691> Uptime: **${moment.duration(uptime[i]).format(` D [Day], H [Hour], m [Minute], s [Second]`)}**`, true)
}
 botkanal.messages.fetch(mesajid).then(m => m.edit({ embeds: [embed] }))
// channel.messages.edit(id, { embeds: [...] })

//  botkanal.messages.fetch({ message: mesajid}).then(m => m.edit({ embeds: [embed]}))
    
  }
    
}, 10000); 
  }) 
*/



/////1 saniye 1000 ms, 30 saniye 30000 ms, 1 saat 3600000 ms di

    
      
 


  client.on("guildCreate", async(guild) => {
    client.slashCommands(slashsFolders, './commands');

    
    })
         
setInterval(() => {
      fetch(`https://agate-mellow-truffle.glitch.me`)
    // console.log(`a`)
  }, 60000)

app.get("/", (request, response) => {
  

  response.sendStatus(200);
});

 
const db = require("quick.db")
const Discord = require('discord.js');
let flxninami = "ayn"
    

 
  
  


  client.on('interactionCreate', async interaction  => {
	if (!interaction.isButton()) return;
   
 const RolesData = require("./data/roles.js");
    let data  =   RolesData.find({
        sw: interaction.guild.id,
    }, async(err, res) => {
      for(const i in res) {
if (interaction.customId === `br-${res[i].btid}`) {

var guild = client.guilds.cache.get(interaction.guild.id)
            const  member = await guild.members.fetch(interaction.user.id)
            const role = await guild.roles.fetch(res[i].role)
     
 
  
  	if (interaction.member.roles.cache.has(role.id)) {
			interaction.member.roles.remove(role);
			interaction.reply({ content: `<:yildizz:907645438675529738> | I have successfully reclaimed the role of ${role} from you`, ephemeral: true });
		}
		else {
			interaction.member.roles.add(role);
			interaction.reply({ content: `<:yildizz:907645438675529738> | i have successfully assigned you the role of ${role}`, ephemeral: true });
	}

  
 }   
    }
    })
    
    })
    
const { ButtonStyle } = require('discord.js')
client.on('interactionCreate', async interaction => {
	if (!interaction.isButton()) return;
	if (interaction.customId === 'yeni') {
              const Discord = require("discord.js") 
const { EmbedBuilder } = require("discord.js");
const {ActionRowBuilder, ButtonBuilder} = require("discord.js") 
const moment = require("moment");
require("moment-duration-format");
  const sayi = db.get('sayi') 
  const mapping = {

    " ": "   ",
      "0": "",
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
    "6": "",
    "7": "",
    "8": "",
    "9": "",
};
  let yasin2 = sayi
  let ab =
    `${yasin2}`
    .split("")
    .map(c => mapping[c] || c)
    .join(" ")
  
  const duration = moment.duration(client.uptime).format(" D [Day], H [Hour], m [Minute], s [Second]");
  
 
  const command = db.get("command")
  
  const yasim = new EmbedBuilder()
    //Toplam Komut Kullanım: 
    .setThumbnail(client.user.avatarURL())
    
 .addFields([
{ name: `<:owner:963511214875484191>Owner & Developer`, value:  `<@${client.settings.owner}>` },
{ name: `<:ana:901901796463743087>My Creation Date`, value:  `<t:1649765068:F>` },
{ name: `<:roket:887813266930278401>Total Command Usage This Month`, value:  `${command}` },
{ name: `<:sw:895667209689505842>Total Server`, value:  `${client.guilds.cache.size}` },
{ name: `<:member:895667392489848872>Total Users`, value:  `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}` },
{ name: `<:ping:895667502913306675>Ping`, value:  `${client.ws.ping}` },
{ name: `<:djs:895667626347483177>Discord.js Version`, value:  `${Discord.version}` },
{ name: `<a:vds:895667724951367710> | Memory Usage`, value:  `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB` },
{ name: `<a:emoji_22:892511440370544691> | Uptime`, value:  `${duration}` },
{ name: `<:nebilmamk:895686113119858719>Total Commands`, value:  `${client.slashs.size}` },
//{ name: `<:ana:901901796463743087>Bot Kuruluş`, value:  `${moment(client.user.createdAt).format('YYYY MM DD HH:mm:ss')}` },
])   

 


 




  
//
//.setFooter(`${interaction.user.tag} | `) 
.setTimestamp()
  
.setColor(`${client.settings.embedcolor}`)
             
 
const b1 = new ActionRowBuilder().addComponents(new ButtonBuilder()
	.setLabel('Refresh')
  .setCustomId("yeni")
	.setStyle(ButtonStyle.Secondary)
	.setEmoji('<a:emoji_22:892511440370544691>')         
 );
const d = new ActionRowBuilder().addComponents(new ButtonBuilder()
   .setStyle(ButtonStyle.Link)
   .setLabel("Invite")
   .setEmoji("<:kac:902518703814508604>") 
   
   .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`),
                                                
);
		
	await	interaction.update({ embeds: [yasim], components: [b1, d],  });
 
  //Reply
	}
});

   client.on('guildMemberRemove', async  member  => {
 let kanal = await db.fetch(`welcome_${member.guild.id}`);
if(!kanal) return;
 const discanvas = require('discanvas');
  
  const leave = await new discanvas.Leave()
    .setAvatar('https://cdn.discordapp.com/avatars/' + member.id + '/' + member.user.avatar + '.png')
    .setUsername(member.user.username)
    .setDiscriminator(member.user.discriminator)
    .setBackground('BACKGROUND', 'https://i.ibb.co/QXr0CKz/20220713-224909.png')
  //  .setBackground('COLOR', '#ff5555')
    .setMainText('Goodbye')
    .setSecondText('Your departure makes us sad')
    
    .setCircleColor('#4951be')
    .toLeave()

  
  
  
  //https://i.ibb.co/QXr0CKz/20220713-224909.jpg
   member.guild.channels.cache.get(kanal).send({ files: [{ attachment: leave.toBuffer(), name: 'leave.png' }] });


});

client.on("guildMemberAdd", async member => {
      var guild = client.guilds.cache.get(member.guild.id)

  let kanal = await db.fetch(`autorolek_${member.guild.id}`);
  let rol = await db.fetch(`autorole_${member.guild.id}`);
 if(!kanal) return;
// const boostchannel = guild.channels.cache.get(kanal) 
   
   const embed = new EmbedBuilder()
   .setColor(client.settings.embedcolor) 

    .setDescription(`${client.emoji.y} | The new joined user <@${member.user.id}> has been given the role <@&${rol}>`)
    .setTimestamp()
   member.guild.channels.cache.get(kanal).send({
      embeds: [embed],
   
    })
    ///eval input:client.emit("guildMemberAdd", interaction.member)

    var guild = client.guilds.cache.get(member.guild.id)
            const member2 = await guild.members.fetch(member.user.id)
            const role = await guild.roles.fetch(rol)
            member2.roles.add(role)
 
  })

client.on('guildMemberAdd', async  member  => {

   let kanal = await db.fetch(`welcome_${member.guild.id}`);
if(!kanal) return;
 const discanvas = require('discanvas');

const welcome = await new discanvas.Welcome()
    .setAvatar('https://cdn.discordapp.com/avatars/' + member.id + '/' + member.user.avatar + '.png')
    .setUsername(member.user.username)
    .setDiscriminator(member.user.discriminator)
    .setBackground('BACKGROUND', 'https://i.ibb.co/0f1BygJ/20220713-223737.jpg')
    //or : .setBackground('COLOR', '#ff5555')
    .setMainText('Welcome')
   .setSecondText('We are now ' + member.guild.memberCount + ' in the guild !')
    
    .setCircleColor('#4951be')
    .toWelcome()

   
  member.guild.channels.cache.get(kanal).send({ files: [{ attachment: welcome.toBuffer(), name: 'welcome.png' }] });
//  const boostchannel = client.channels.cache.get(kanal) // Channel ID , In This Channel The Card Will Be Sended
        
 //  await boostchannel.send({ content: [ welcome ] });
  
//channel#send(image)
});
//guildMemberRemove



            



//Login Discord Bot Token
client.login(process.env.TOKEN);
