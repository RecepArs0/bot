          
const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js") 
const db = require('quick.db');
const { EmbedBuilder } = require("discord.js");
const {ActionRowBuilder, ButtonBuilder} = require("discord.js") 

module.exports = {
        pre: true,
        permission: "Administrator",
        cooldown: 60,
        data: new SlashCommandBuilder()
        .setName('role-multiple')
        .addStringOption(option =>
        option.setName('pick_type')
				.setDescription('Pick a type')
				.setRequired(true)
        .addChoices(
				{ name: 'All', value: 'all' },
				{ name: 'Bots', value: 'bots' },
        { name: 'Humans', value: 'humans' }))                 
			 .addStringOption(option =>
        option.setName('give_or_remove')
				.setDescription('Pick a type')
				.setRequired(true)
        .addChoices(
				{ name: 'Give', value: 'give' },
				{ name: 'Remove', value: 'remove' }))
			  .setDescription('Give / remove multiple users from a role.')
        .addRoleOption(option => option.setName('role').setRequired(true).setDescription('Enter a Role')),
    
    async execute(interaction, client) {
//const role = interaction.options.getRole('role');
      
const role = interaction.options.getRole('role');
  
 const flx = interaction.options.getString('give_or_remove');   
 
const abim = interaction.options.getString('pick_type');   
if(abim === 'all') {
  if(flx === 'give') {
     

  //white_check_mark Changing roles for 828 members, +Member   
    var memberCount = interaction.guild.members.cache.size;  
 interaction.guild.members.cache.forEach((member, i) => { // Looping through the members of Role.
    setTimeout(() => {
        member.roles.add(role); // Removing the Role.
    }, i * 1000);
});
 let a = new EmbedBuilder()
        
          .setColor(client.settings.embedcolor)
         
            .setDescription(`
${client.emoji.y} | Changing roles for ${memberCount} members, ${role}

    `)
           
         interaction.reply({ embeds: [a] })
           
  }
  
       if(flx === 'remove') {
     

    var memberCount = interaction.guild.members.cache.size; 
         
interaction.guild.members.cache.forEach((member, i) => { // Looping through the members of Role.
    setTimeout(() => {
        member.roles.remove(role); // Removing the Role.
    }, i * 1000);
});
  let a = new EmbedBuilder()
        
          .setColor(client.settings.embedcolor)
         
            .setDescription(`
${client.emoji.y} | Removing roles for ${memberCount} members, ${role}

    `)
           
         interaction.reply({ embeds: [a] })
           
  }
  }
      if(abim === 'humans') {
      if(flx === 'give') {
     

    var memberCount = interaction.guild.members.cache.filter(a => !a.user.bot).size;  
 interaction.guild.members.cache.filter(a => !a.user.bot).forEach((member, i) => { // Looping through the members of Role.
    setTimeout(() => {
        member.roles.add(role); // Removing the Role.
    }, i * 1000);
});
 let a = new EmbedBuilder()
        
          .setColor(client.settings.embedcolor)
         
            .setDescription(`
${client.emoji.y} | Changing roles for ${memberCount} members, ${role}

    `)
           
         interaction.reply({ embeds: [a] })
           
  }
       if(flx === 'remove') {
     

    var memberCount = interaction.guild.members.cache.filter(a => !a.user.bot).size; 
         
interaction.guild.members.cache.filter(a => !a.user.bot).forEach((member, i) => { // Looping through the members of Role.
    setTimeout(() => {
        member.roles.remove(role); // Removing the Role.
    }, i * 1000);
});
  let a = new EmbedBuilder()
        
          .setColor(client.settings.embedcolor)
         
            .setDescription(`
${client.emoji.y} | Removing roles for ${memberCount} members, ${role}

    `)
           
         interaction.reply({ embeds: [a] })
   
        
    }    
        
        
        
        
        }
       if(abim === 'bots') {
      if(flx === 'give') {
     

    var memberCount = interaction.guild.members.cache.filter(a => a.user.bot).size;  
 interaction.guild.members.cache.filter(a => a.user.bot).forEach((member, i) => { // Looping through the members of Role.
    setTimeout(() => {
        member.roles.add(role); // Removing the Role.
    }, i * 1000);
});
 let a = new EmbedBuilder()
        
          .setColor(client.settings.embedcolor)
         
            .setDescription(`
${client.emoji.y} | Changing roles for ${memberCount} members, ${role}

    `)
           
         interaction.reply({ embeds: [a] })
           
  }
       if(flx === 'remove') {
     

    var memberCount = interaction.guild.members.cache.filter(a => a.user.bot).size; 
         
interaction.guild.members.cache.filter(a => a.user.bot).forEach((member, i) => { // Looping through the members of Role.
    setTimeout(() => {
        member.roles.remove(role); // Removing the Role.
    }, i * 1000);
});
  let a = new EmbedBuilder()
        
          .setColor(client.settings.embedcolor)
         
            .setDescription(`
${client.emoji.y} | Removing roles for ${memberCount} members, ${role}

    `)
           
         interaction.reply({ embeds: [a] })
   
        
    }    
        
        
        
        
        
         
         
         
         
         
         
         
         
         }
      }
 }
      
      
  

            
