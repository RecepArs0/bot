           
const Discord = require("discord.js") 
const db = require('quick.db');
const { EmbedBuilder, SelectMenuBuilder } = require("discord.js");
const {ActionRowBuilder, ButtonBuilder} = require("discord.js") 

const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
   category: "info",
 
  data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Displays information the server'),
  
   // .addStringOption(option => option.setName('input').setRequired(true).setDescription('Enter a Code')),

  
   async execute(interaction, client, args) {



await interaction.guild.members.fetch();
const members = interaction.guild.members.cache;
const channels = interaction.guild.channels.cache;
const emojis = interaction.guild.emojis.cache.size;
const firstFiveEmojis = interaction.guild.emojis.cache.map(emoji => emoji).slice(0, 5).join(' ');
const boostCount = interaction.guild.premiumSubscriptionCount;
const verificationLevel = interaction.guild.verificationLevel;
const rolesCount = interaction.guild.roles.cache.size;
         const row = new ActionRowBuilder()
          .addComponents(
            new SelectMenuBuilder()
            .setCustomId('category')
            .setPlaceholder(`Server Info`)
            .addOptions([{
                label: "Server İnfo",
                value: "info",
                emoji: '<:tag:963525198848614400>',
              },
              {
                label: "Server Avatar",
                value: "pp",
                emoji: '<:sj:963805575643279360>',
              },
                         //:<:guluyor_waycanina:907644996470071317>
              {
                label: "Roles",
                value: "bar",
                emoji: '<:member:895667392489848872>',
              },
                         {
                label: "Emojis",
                value: "emoji",
                emoji: '<:guluyor_waycanina:907644996470071317>',
              },
                         //:<:dev:887753564267614249>
                                    
            ]),
          );
        
 await interaction.reply({
    embeds: [
        new EmbedBuilder()
            .setColor(client.settings.embedcolor)
            .setAuthor({ name: `${interaction.guild.name}'s Information`, iconURL: interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }) })
            .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
            .addFields(
                { name: '🆔 Server ID:', value: `${interaction.guildId}`, inline: true },
                { name: '📆 Created On:', value: `**<t:${Math.floor(interaction.guild.createdTimestamp / 1000)}:R>**`, inline: true },
                { name: '👑 Owned by:', value: `<@!${interaction.guild.ownerId}>`, inline: true },
                { name: `👥  Members (${interaction.guild.memberCount}):`, value: `**${members.filter(member => member.presence?.status === 'online').size + members.filter(member => member.presence?.status === 'idle').size + members.filter(member => member.presence?.status === 'dnd').size}** Online | Idle | DND\n**${members.filter(member => !['online', 'idle', 'dnd'].includes(member.presence?.status)).size}** Offline\n**${members.filter(member => member.user.bot).size}** Bot`, inline: true },
                { name: `💬 Channels (${interaction.guild.channels.cache.size}):`, value: `**${channels.filter(channel => channel.type === 0).size}** Text | **${channels.filter(channel => channel.type === 2).size}** Voice\n**${channels.filter(channel => channel.type === 4).size}** Category`, inline: true },
                { name: `🌐 Others:`, value: `Verification Level: **${verificationLevel}**\nBoosts: **${boostCount}** <:blurple_tada:887810717053485077>\nRoles: **${rolesCount}**`, inline: true },
                { name: `🛡️ Emojis (${emojis}):`, value: `**${firstFiveEmojis}**`, inline: true },
            )
    ], components: [row] // ephemeral: true
}).then(async c => {
    const collector = await c.createMessageComponentCollector({
          
          time: 520000 //50 seconds
        });

           collector.on('collect', i => {
                 if (i.user.id === interaction.user.id) {
  if(i.values[0] === 'info') {
    
    interaction.editReply({
            embeds: [
        new EmbedBuilder()
            .setColor(client.settings.embedcolor)
            .setAuthor({ name: `${interaction.guild.name}'s Information`, iconURL: interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }) })
            .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
            .addFields(
                { name: '🆔 Server ID:', value: `${interaction.guildId}`, inline: true },
                { name: '📆 Created On:', value: `**<t:${Math.floor(interaction.guild.createdTimestamp / 1000)}:R>**`, inline: true },
                { name: '👑 Owned by:', value: `<@!${interaction.guild.ownerId}>`, inline: true },
                { name: `👥  Members (${interaction.guild.memberCount}):`, value: `**${members.filter(member => member.presence?.status === 'online').size + members.filter(member => member.presence?.status === 'idle').size + members.filter(member => member.presence?.status === 'dnd').size}** Online | Idle | DND\n**${members.filter(member => !['online', 'idle', 'dnd'].includes(member.presence?.status)).size}** Offline\n**${members.filter(member => member.user.bot).size}** Bot`, inline: true },
                { name: `💬 Channels (${interaction.guild.channels.cache.size}):`, value: `**${channels.filter(channel => channel.type === 0).size}** Text | **${channels.filter(channel => channel.type === 2).size}** Voice\n**${channels.filter(channel => channel.type === 4).size}** Category`, inline: true },
                { name: `🌐 Others:`, value: `Verification Level: **${verificationLevel}**\nBoosts: **${boostCount}** <:blurple_tada:887810717053485077>\nRoles: **${rolesCount}**`, inline: true },
                { name: `🛡️ Emojis (${emojis}):`, value: `**${firstFiveEmojis}**`, inline: true },
            )
    ], components: [row] // ephemeral: true
          
    
   })
 
 
    
    
    }
         if(i.values[0] === 'pp') { 
         const embed = new EmbedBuilder()
    .setColor(`${client.settings.embedcolor}`)
    .setImage(interaction.guild.iconURL({ dynamic: true, size: 2048 }))
  //.setFooter(mentionedMember.user.displayName,mentionedMember.user.displayAvatarURL({ dynamic: true }));
 interaction.editReply({
         embeds: [embed],
          components: [row]
    
   })
  
           }
                   
                    if(i.values[0] === 'bar') { 
       
         const embed = new EmbedBuilder()
    .setColor(`${client.settings.embedcolor}`)
         //   
              
    .setDescription(`${client.emoji.y} | Roles ${interaction.guild.roles.cache.map(r => `${r}`).join(',').replace('@everyone', ' ')}`)
  //.setFooter(mentionedMember.user.displayName,mentionedMember.user.displayAvatarURL({ dynamic: true }));
 interaction.editReply({
         embeds: [embed],
          components: [row]
    
   })
  
           }
                                    if(i.values[0] === 'emoji') { 
       
         const am = new EmbedBuilder()
    .setColor(`${client.settings.embedcolor}`)
         //    ${client.emoji.y} | All Emojis ${interaction.guild.emojis.cache.map(r => `${r}`).join(' | ')}`) 

          //  
.setDescription(`
${client.emoji.y} | Animated Emojis ${interaction.guild.emojis.cache.filter(a => a.animated).map(r => `${r}`).join(',')}
${client.emoji.y} | Motionless Emojis ${interaction.guild.emojis.cache.filter(a => !a.animated).map(r => `${r}`).join(',')}`)
              //   .setDescription(`
//${client.emoji.y} | Animated Emojis ${interaction.guild.emojis.cache.filter(a => a.animated).map(r => `${r}`).join(',')}
//${client.emoji.y} | Motionless Emojis ${interaction.guild.emojis.cache.filter(a => !a.animated).map(r => `${r}`).join(',')}`)
  //.setFooter(mentionedMember.user.displayName,mentionedMember.user.displayAvatarURL({ dynamic: true }));
 interaction.editReply({
         embeds: [am],
          components: [row]
    
   })
                                   
  }
 if(i.values[0] === 'emojiid') { 
   
   
             }
}
})
})
     }
  }
                        
  

            
