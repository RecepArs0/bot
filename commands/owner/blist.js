         
const Discord = require("discord.js");

const fs = require("fs");
const moment = require("moment");
const db = require("quick.db");
const os = require("os");
require("moment-duration-format");

const {EmbedBuilder, ButtonBuilder} = require("discord.js") 
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
  category: "owner",
 // sever:  '887417966524784683',
  data: new SlashCommandBuilder()
 
        .setName('blacklist')
        .setDescription('Black list a user only for owners')
        .addStringOption(option =>
        option.setName('option')
				.setDescription('option the wants ?')
				.setRequired(true)
        .addChoices(
				{ name: 'add', value: 'add' },
				{ name: 'delete', value: 'delete' }))
		                 
		.addUserOption(option => option.setName('user').setRequired(true).setDescription('User')),

  
   async execute(interaction, client, args, database) {

 

  
 
     const no = new EmbedBuilder()
            .setTitle("error").setColor(client.settings.embedcolor)
            .setDescription(" You dont have perms to use this command. Only Owner's can use this command")
            .setThumbnail(interaction.user.displayAvatarURL())
       //     .setFooter(interaction.user.tag)

     
     
     if (!client.settings.owner.includes(interaction.member.user.id)) return interaction.reply({
            embeds: [no], ephemeral: true
        });
      
 const abim = interaction.options.getString('option');   
 if(abim === "add")  {
   const amks = interaction.options.getMember('user');
const User = client.blistdata

        const find = await User.findOne({
        user: amks.id,
      });

      // If it does not exist, create it in the database.
      if (!find) {
        User.create({
          userid: amks.id,
          isblist: true,
         
        });
}
       let am = new EmbedBuilder()
      
      .setColor(`${client.settings.embedcolor}`)
      .setDescription(`<:y_:972054877436014632> | ${amks.user.tag} added to blacklist`);
   
      
   //console.log(client.allFiles) 
      
      interaction.reply({embeds: [am]});
    }
  
  
 

if(abim === 'delete') {
     const amks = interaction.options.getMember('user');
const User = client.blistdata

        const find =  User.findOne({
        user: amks.id,
      });
 find.deleteOne().catch(() => {});
      
       let am = new EmbedBuilder()
      
      .setColor(`${client.settings.embedcolor}`)
      .setDescription(`<:y_:972054877436014632> | ${amks.user.tag} Deleted From Blacklist`);
   
      
   //console.log(client.allFiles) 
      
      interaction.reply({embeds: [am]});
    }
  }
 }
  

     