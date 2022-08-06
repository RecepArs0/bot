   
const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js") 
const db = require('quick.db');
const { EmbedBuilder } = require("discord.js");
const {ActionRowBuilder, ButtonBuilder} = require("discord.js") 

module.exports = {
        category: "mod",
        permission: "ManageGuild",
        cooldown: 6,
        data: new SlashCommandBuilder()
        .setName('welcome')
 
        .addStringOption(option =>
        option.setName('option')
				.setDescription('option the wants ?')
				.setRequired(true)
        .addChoices(
				{ name: 'open', value: 'open' },
				{ name: 'close', value: 'close' }))
			  .setDescription('Set Welcome Goodbye Channel')
        .addChannelOption(option => option.setName('channel').setDescription('Select a channel')),
 
    async execute(interaction, client) {
//const role = interaction.options.getRole('role');
      
const kanal = interaction.options.getChannel('channel');
  
  
const abim = interaction.options.getString('option');   
 if(abim === "open")  {
   if(kanal === null) return  interaction.reply({ ephemeral: true,  content: `${client.emoji.x} | Select A Channel` })

  let kanal31 = await db.fetch(`welcome_${interaction.guild.id}`);
if(kanal31) return  interaction.reply({ ephemeral: true,  content: `${client.emoji.x} | Welcome Goodbye Is Open` })
     
        let a = new EmbedBuilder()
          .setColor(client.settings.embedcolor)
         
            .setDescription(`
${client.emoji.y} | Welcome Goodbye Activated
<:tag:963525198848614400> | Channel ${kanal}
    `)

        await interaction.reply({ embeds: [a] });

db.set(`welcome_${interaction.guild.id}`, kanal.id) 
      
      
    }
      
 if(abim === "close")  {
  let kanal32 = await db.fetch(`welcome_${interaction.guild.id}`);
if(!kanal32) return  interaction.reply({ ephemeral: true,  content: `${client.emoji.x} | Welcome Goodbye Is Not Open` })
 
        let a = new EmbedBuilder()
          .setColor(client.settings.embedcolor)
         
            .setDescription(`
${client.emoji.y} | Welcome Goodbye Closed

    `)

        await interaction.reply({ embeds: [a] });

db.delete(`welcome_${interaction.guild.id}`) 
      
   
   
   
}
} 
  }

     