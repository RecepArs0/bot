
const { ButtonStyle } = require('discord.js')
const Discord = require("discord.js") 
const db = require('quick.db');
const { EmbedBuilder } = require("discord.js");
const {ActionRowBuilder, ButtonBuilder} = require("discord.js") 
const moment = require("moment");
const { SlashCommandBuilder } = require('@discordjs/builders');

require("moment-duration-format");
module.exports = {
   category: "info",
 
    cooldown: 6,
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Displays information about the bot.'),
      
   async execute(interaction, client) {

       
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
  /*
  .setDescription(`
<:sw:895667209689505842>Toplam Sunucu 
${client.guilds.cache.size}
<:member:895667392489848872>Toplam Kullanıcı ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
<:ping:895667502913306675>Pingim ${client.ws.ping}  
<:djs:895667626347483177>Discord.js Sürümü ${Discord.version}
Bellek Kullanımı ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB  
Uptime ${duration}  
<:nebilmamk:895686113119858719>Toplam Komut Sayısı ${client.commands.size}  
<:kitab:857610299280195617>Kuralları Kabul Eden Kişi Sayısı > ${ab}  
<:owner:896123156148924447>Yapımcım & Geliştirici <@608421078645211156>, <@868311248268296232>
<:ana:901901796463743087>Bot Kuruluş ${moment(client.user.createdAt).format('YYYY MM DD HH:mm:ss')}  
  
  
  ${client.settings.botnick}'in Hizmet Ettiği Kullanıcılar **[${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}]**

<:online:904283178745872425>${client.guilds.cache.reduce((a, b) => a + b.members.cache.filter(a => a.presence.status === 'online').size, 0).toLocaleString()}
<:idle:904283712974356480>${client.guilds.cache.reduce((a, b) => a + b.members.cache.filter(a => a.presence.status === 'idle').size, 0).toLocaleString()}
<:dnd:904283115466395698>${client.guilds.cache.reduce((a, b) => a + b.members.cache.filter(a => a.presence.status === 'dnd').size, 0).toLocaleString()}
<:offline:904283298983989248>${client.guilds.cache.reduce((a, b) => a + b.members.cache.filter(a => a.presence.status === 'offline').size, 0).toLocaleString()}
`)
  .setFooter(`${message.author.tag} | Son Yenilenme ->`) 
.setTimestamp()
  */
    //Toplam Komut Kullanım: 
    .setThumbnail(client.user.avatarURL())
    
 .addFields([
{ name: `<:owner:963511214875484191> | Owner & Developer`, value:  `<@${client.settings.owner}>` },
{ name: `<:ana:901901796463743087> | My Creation Date`, value:  `<t:1649765068:F>` },
{ name: `<:roket:887813266930278401> | Total Command Usage This Month`, value:  `${command}` },
{ name: `<:sw:895667209689505842> | Total Server`, value:  `${client.guilds.cache.size}` },
{ name: `<:member:895667392489848872> | Total Users`, value:  `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}` },
{ name: `<:ping:895667502913306675> | Ping`, value:  `${client.ws.ping}` },
{ name: `<:djs:895667626347483177> | Discord.js Version`, value:  `${Discord.version}` },
{ name: `<a:vds:895667724951367710> | Memory Usage`, value:  `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB` },
{ name: `<a:emoji_22:892511440370544691> | Uptime`, value:  `${duration}` },
{ name: `<:nebilmamk:895686113119858719> | Total Commands`, value:  `${client.slashs.size}` },
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

    
  
interaction.reply({embeds: [yasim],   components: [b1, d]}) 
  }
  
  
  
  }

            
