     
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
        .setName('autorole')
        .setDescription('Set autorole')
              .addStringOption(option =>
        option.setName('option')
				.setDescription('option the wants ?')
				.setRequired(true)
        .addChoices(
				{ name: 'open', value: 'open' },
				{ name: 'close', value: 'close' }))                       
			     
        .addRoleOption(option => option.setName('role').setDescription('Enter a Role'))
        .addChannelOption(option => option.setName('channel').setDescription('Select a channel')),
 
    async execute(interaction, client) {
const role = interaction.options.getRole('role');
const kanal = interaction.options.getChannel('channel');
const abim = interaction.options.getString('option');   
if(abim === 'open')   {
if(role === null) return  interaction.reply({ ephemeral: true,  content: `${client.emoji.x} | Select A Role` })
if(kanal === null) return  interaction.reply({ ephemeral: true,  content: `${client.emoji.x} | Select A Channel` })

      let a = new EmbedBuilder()
          .setColor(client.settings.embedcolor)
         
            .setDescription(`

${client.emoji.y} | AutoRole Activated
<:yetkili:887810957894635580> | Role ${role}
<:roket:887813266930278401> | Channel Log ${kanal}
    `)

        await interaction.reply({ embeds: [a] });

db.set(`autorole_${interaction.guild.id}`, role.id)  
db.set(`autorolek_${interaction.guild.id}`, kanal.id) 
      
      
    }
      if(abim === 'close')   {
let kanal32 = await db.fetch(`autorolek_${interaction.guild.id}`);
if(!kanal32) return  interaction.reply({ ephemeral: true,  content: `${client.emoji.x} | Autorole Is Not Open` })
 
            let a = new EmbedBuilder()
          .setColor(client.settings.embedcolor)
         
            .setDescription(`

${client.emoji.y} | AutoRole Closed
    `)

        await interaction.reply({ embeds: [a] });

db.delete(`autorole_${interaction.guild.id}`)
db.delete(`autorolek_${interaction.guild.id}`)
  
        
        
        }
}
} 

            
