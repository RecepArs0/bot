const { ButtonStyle } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js") 
const db = require('quick.db');
const { EmbedBuilder } = require("discord.js");
const {ActionRowBuilder, ButtonBuilder} = require("discord.js") 
module.exports = {
  
  category: "info",
  cooldown: 3,
  data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('invite'),
    
  
   async execute(interaction, client) {
 
        
    
const yasin = new EmbedBuilder()
.setAuthor({ name: interaction.user.tag, iconURL: interaction.user.avatarURL()})

//.setAuthor(interaction.user.avatarURL())
.setDescription("You can reach the link you want by clicking the buttons below.")

.setColor(client.settings.embedcolor)
//.setFooter(`${client.settings.botnick}`, client.user.displayAvatarURL())
.setFooter({ text: client.settings.botnick, iconURL: client.user.displayAvatarURL()})
    
//Destek Sunucum!
  
const b1 = new ActionRowBuilder().addComponents(new ButtonBuilder()
	.setStyle(ButtonStyle.Link)
   .setLabel("Invite")
   .setEmoji("<:kac:902518703814508604>") 
   .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
  );
const d = new ActionRowBuilder().addComponents(new ButtonBuilder()
 // .setDisabled(true)
   .setStyle(ButtonStyle.Link)
   .setLabel("Support Server")
   .setEmoji("<:bas:963804401384976514>") 
   .setURL(`${client.settings.dc}`)

                                               
);
    const oy = new ActionRowBuilder().addComponents(new ButtonBuilder()
 .setDisabled(true)
   .setStyle(ButtonStyle.Link)
   .setLabel("Vote")
   .setEmoji("<:yildizz:907645438675529738>") 
   .setURL(`https://top.gg/bot/${client.user.id}/vote`)
);
    
  
interaction.reply({embeds: [yasin],   components: [b1, d, oy]}) 
                      
}
  }