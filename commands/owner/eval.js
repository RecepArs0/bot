       
const {Discord, ApplicationCommandPermissionType} = require("discord.js");

const fs = require("fs");
const moment = require("moment");
const db = require("quick.db");
const os = require("os");
require("moment-duration-format");

const {EmbedBuilder, ButtonBuilder, InteractionType} = require("discord.js") 
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
  category: "owner",

 // sever:  '887417966524784683',
  data: new SlashCommandBuilder()
  
        .setName('eval')
        .setDescription('eval code only for owners'),
      	

  
   async execute(interaction, client, args, database) {
     
    const no = new EmbedBuilder()
            .setTitle("error").setColor(client.settings.embedcolor)
            .setDescription(" You dont have perms to use this command. Only Owner's can use this command")
            .setThumbnail(interaction.user.displayAvatarURL())
            //.setFooter(interaction.user.tag)

     
     
     if (!client.settings.owner.includes(interaction.member.user.id)) return interaction.reply({
           embeds: [no], ephemeral: true
       });
   
const { ModalBuilder, TextInputBuilder, SelectMenuBuilder } = require('discord.js');
const { ActionRowBuilder,  TextInputStyle } = require('discord.js');

const modal = new ModalBuilder()
			.setCustomId('eval')
			.setTitle('Eval Modal');
const favoriteColorInput = new TextInputBuilder()
			.setCustomId('evalinput')
		  .setLabel("Your Code")
		  .setStyle(TextInputStyle.Paragraph);

		const hobbiesInput = new TextInputBuilder()
			.setCustomId('ephemeralinput')
			.setLabel("Ephemeral? True Or False")
      .setMinLength(4)
      .setMaxLength(5)
      .setRequired(false)
			.setStyle(TextInputStyle.Short);
     
		const firstActionRow = new ActionRowBuilder().addComponents([favoriteColorInput]);  
     const secondActionRow = new ActionRowBuilder().addComponents([hobbiesInput]);
  
		modal.addComponents([firstActionRow, secondActionRow]);

		await interaction.showModal(modal);
	
     
     
     
     
     
     
	}
	
     
     
     
      
/*    function clean(text) {
    if (typeof text == "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
  }


  
 
     const no = new EmbedBuilder()
            .setTitle("error").setColor(client.settings.embedcolor)
            .setDescription(" You dont have perms to use this command. Only Owner's can use this command")
            .setThumbnail(interaction.user.displayAvatarURL())
    //        .setFooter(interaction.user.tag)

     
     
     if (!client.settings.owner.includes(interaction.member.user.id)) return interaction.reply({
            embeds: [no], ephemeral: true
        });
    
   
    const { inspect } = require('util');
      let evaled;  
 try {
   const amks = interaction.options.getString('input');

    let code = [amks].join(" ");
    let evaled = eval(code);   
    let tip = typeof evaled;

 
   
   let embed = new Discord.EmbedBuilder()

      .setColor(`${client.settings.embedcolor}`)
      
//.addFields([
//{ name: "GİRİŞ", value:  `\`\`\`js\n${code}\`\`\`` },
//{ name: "Tür", value:  `\`${tip}\``, inline: true },
//{ name: "Uzunluk", value:  `\`${inspect(evaled).length}\``, inline: true },
//{ name: "Gecikme", value:  `\`${client.ws.ping} MS\``, inline: true },
//])
      .setDescription(`
        SONUÇ
       \`\`\`js\n${
          evaled.length > 1000
            ? `${evaled.slice(0, 1000)}...`
            : `${inspect(evaled)}`
        }\`\`\`
      `)
    
      
      ;
  //client.emit("guildMemberAdd", interaction)

      interaction.reply({embeds: [embed], ephemeral: true });
      console.log(inspect(evaled));
    }
    catch (error) {
      
       let am = new EmbedBuilder()
      
      .setColor(`${client.settings.embedcolor}`)
  .setDescription(
        "HATA",
        `\`\`\`js\n${
          inspect(error).length > 1000
            ? `${inspect(error).slice(0, 1000)}...`
            : `${inspect(error)}`
        }\n\`\`\``)
   
      
   //console.log(client.allFiles) 
      console.error(error);
      interaction.reply({embeds: [am], ephemeral: true });
    }
  }
  */
 

      }
  
     