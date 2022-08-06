         
const { ButtonStyle } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, SelectMenuBuilder } = require("discord.js");
const {ActionRowBuilder, ButtonBuilder} = require("discord.js") 
const moment = require("moment");
module.exports = {
   category: "info",
 
    cooldown: 4,
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Shows Bot Commands.'),
  
    async execute(interaction, client) {
       const mentionedMember = interaction.options.getMember('user') || interaction.member;
  const find = await client.userdata.findOne({
        redeemedBy: mentionedMember.id,
      });
 
      let am = ""
      if(!find) {
     am = `**<:yildizz:907645438675529738> | Premium Status ${client.emoji.x}**`
    } 
      
     if(find) {
             const expires = moment(find.expiresAt).format(
        "dddd, MMMM Do YYYY HH:mm:ss"
      );
   const sik = moment(find.redeemedAt).format(
        "dddd, MMMM Do YYYY HH:mm:ss"
      );

     am = `**<:yildizz:907645438675529738> | Premium Status  ${client.emoji.y} \n<:time:901901718630047774> | Expires At ${expires}**\n**<:webhook:907645138493403186> | Redeemed At ${sik}**\n**<:lan:972481779137151046> | Premium Plan ${find.plan}**`
       }
         
   const yasin = new EmbedBuilder()
.setAuthor({ name: `${client.settings.botnick}'s Commands`, iconURL: interaction.user.avatarURL()})       
.setDescription(`
${am}
**<:ping:895667502913306675> | You can reach the commands you want by clicking the Select Menu below.**

**<:yildizz:907645438675529738> | Premium Commands: ${client.slashs.filter(command => command.pre).size}**

**<:owner:963511214875484191> | Owner Commands: ${client.slashs.filter(command => command.category === 'owner').size}**

**<:support:887773850463535104> | Info Commands: ${client.slashs.filter(command => command.category === 'info').size}**

**<:yetkili:887810957894635580> | Moderation Commands: ${client.slashs.filter(command => command.category === 'mod').size}**

**<:member:895667392489848872> | User Commands: ${client.slashs.filter(command => command.category === 'user').size}**

`)
.setThumbnail(interaction.user.avatarURL()) 
.setColor(`${client.settings.embedcolor}`)
//.setFooter(`${client.settings.botnick}`, client.user.displayAvatarURL())
   .setFooter({ text: client.settings.botnick, iconURL: client.user.displayAvatarURL()})

 const flx = new ActionRowBuilder()
  .addComponents(new ButtonBuilder()
                     //ButtonBuilder in ActionRowBuilder
	.setStyle(ButtonStyle.Link)
   .setLabel("Invite")
   .setEmoji("<:kac:902518703814508604>") 
    //https://discord.com/api/oauth2/authorize?client_id=996394764528275518&permissions=8&scope=bot%20applications.commands             
   .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`),
new ButtonBuilder()                 
  // .setDisabled(true)
   .setStyle(ButtonStyle.Link)
   .setLabel("Support Server")
   .setEmoji("<:bas:963804401384976514>") 
   .setURL(`${client.settings.dc}`),

  new ButtonBuilder()
     .setDisabled(true)
   .setStyle(ButtonStyle.Link)
   .setLabel("Vote")
   .setEmoji("<:yildizz:907645438675529738>") 
   .setURL(`https://top.gg/bot/${client.user.id}/vote`),
                 );
      
   
 let yasim = await interaction.reply({
          embeds: [yasin],
          components: [row, flx]
        })