const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js") 
const db = require('quick.db');
const { EmbedBuilder } = require("discord.js");
const {ActionRowBuilder, ButtonBuilder} = require("discord.js") 

module.exports = {
        category: "mod",
        permission: "ManageMessage",
        cooldown: 6,
        data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Clear Messages')
       
       // .addChannelOption(option => option.setName('channel').setRequired(true).setDescription('Select a channel')),
        .addIntegerOption(option => option.setName('amount').setRequired(true).setDescription('Amount of message to delete. (Min 1 - Max 100)'))
        .addUserOption(option => option.setName('target').setDescription('Select a target to clear their messages')),
       
    async execute(interaction, client) {
      
const Amount = interaction.options.getInteger("amount");
const Target = interaction.options.getUser("target");
const msg = interaction.options.getInteger('amount');





      
          let a = new EmbedBuilder()
          .setColor(client.settings.embedcolor)
         
            .setDescription(`Specify a number from 1 to 100.`)
      
  
      
      if(msg > 100)    await interaction.reply({ embeds: [a], ephemeral: true });
      
      
      const Messages = await interaction.channel.messages.fetch();
      
      
      const Response = new EmbedBuilder()
      .setColor(client.settings.embedcolor)
       
      if(Target) { 
let i = 0;
const filtered = []; 
(await Messages).filter((m) => {
if( m.author.id === Target.id && Amount > i) {
 filtered.push(m);
  i++;
  }
})
           
        
        await interaction.channel.bulkDelete(filtered, true).then(messages => { 
       Response.setDescription(`${client.emoji.y} | Cleard ${messages.size} from ${Target}.`);
        interaction.reply({embeds: [Response]})                                  
     })
        
 } else {
await interaction.channel.bulkDelete(Amount , true).then (messages => { 
Response.setDescription(`${client.emoji.y} | Cleard ${messages.size} from this channel`);
interaction.reply({embeds: [Response]});    
  })  
                                          
                                          
                                          
      
      
      
      
      
      
    }
 
      
       
       
      }
  }