const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, SelectMenuBuilder } = require("discord.js");
const {ActionRowBuilder, ButtonBuilder} = require("discord.js") 
const moment = require("moment");
module.exports = {
   category: "info",
 
    cooldown: 6,
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Shows user information.')
        .addUserOption(option =>
            option.setName('user').setDescription('User to get his information.')
        ),

    async execute(interaction, client) {
 const mentionedMember = interaction.options.getMember('user') || interaction.member;
 
   const userFlags = (await mentionedMember.user.fetchFlags()).toArray();
   const activities = [];
   let customStatus;
   for (const activity of mentionedMember.presence.activities.values()) {
     switch (activity.type) {
       case 'PLAYING':
         activities.push(`Playing **${activity.name}**`);
         break;
       case 'LISTENING':
         if (mentionedMember.user.bot) activities.push(`Listening to **${activity.name}**`);
         else activities.push(`Listening to **${activity.details}** by **${activity.state}**`);
         break;
       case 'WATCHING':
         activities.push(`Watching **${activity.name}**`);
         break;
       case 'STREAMING':
         activities.push(`Streaming **${activity.name}**`);
         break;
       case 'CUSTOM_STATUS':
         customStatus = activity.state;
         break;
     }
   }
  const find = await client.userdata.findOne({
        redeemedBy: mentionedMember.id,
      });
 
      let am = ""
      if(!find) {
     am = `**<:support:887773850463535104> | Premium Status ${client.emoji.x}**`
    } 
      
     if(find) {
             const expires = moment(find.expiresAt).format(
        "dddd, MMMM Do YYYY HH:mm:ss"
      );
   const sik = moment(find.redeemedAt).format(
        "dddd, MMMM Do YYYY HH:mm:ss"
      );

     am = `**<:support:887773850463535104> | Premium Status  ${client.emoji.y} \n<:time:901901718630047774> | Expires At ${expires}**\n**<:webhook:907645138493403186> | Redeemed At ${sik}**\n**<:lan:972481779137151046> | Premium Plan ${find.plan}**`
       }
   
        let Embed = new EmbedBuilder()
        .setThumbnail(mentionedMember.user.avatarURL())
        
            .setColor(client.settings.embedcolor)
            .setAuthor({ name: `${mentionedMember.user.tag}'s Information`, iconURL: mentionedMember.user.avatarURL()})
            .addFields(
              {
                name: 'User Info',
                value: `***[${mentionedMember.user.tag}](https://discord.com/users/${mentionedMember.id})*** (${mentionedMember.id})`,
              },
                
                { name: 'Joined Discord:', value: `**<t:${Math.floor(mentionedMember.user.createdTimestamp / 1000)}:R>**`, inline: true },
                { name: 'Joined Server:', value: `**<t:${Math.floor(mentionedMember.joinedAt / 1000)}:R>**`, inline: true },
                { name: 'User Premium Status', value: `${am}`, inline: true},
)
     if (activities.length > 0) Embed.setDescription(activities.join('\n'));
   if (customStatus) Embed.spliceFields(0, 0, { name: 'Custom Status', value: customStatus});
   if (userFlags.length > 0) Embed.addField('Badges', userFlags.map(flags => flags[flags]).join('\n'));
   
const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.setMinValues(1)
				.setMaxValues(1)
					.addOptions([
						{
							label: 'User Info',
							description: 'User Info',
							value: 'info',
              emoji: '<:tag:963525198848614400>',
						},
						{
							label: 'User Avatar',
							description: 'User Avatar',
							value: 'pp',
              emoji: '<:sj:963805575643279360>',
              
						},
						{
							label: 'User Roles',
							description: 'User Roles',
							value: 'roles',
              emoji: '<:member:895667392489848872>',
						},
					]),
			);

		 interaction.reply({ embeds: [Embed], components: [row] }).then(async c => {
    const collector = await c.createMessageComponentCollector({
          
          time: 50000 //50 seconds
        });

collector.on('collect', i => {
if(i.values[0] === 'info') {
i.deferUpdate();
interaction.editReply({ embeds: [Embed], components: [row] })
    
  }
      if(i.values[0] === 'pp') {
  const embed = new EmbedBuilder()
    .setAuthor({ name: `${mentionedMember.user.tag} Avatar`, iconURL: mentionedMember.user.avatarURL()})
    .setColor(`${client.settings.embedcolor}`)
    .setImage(mentionedMember.user.avatarURL({ dynamic: true, size: 2048 }))
  //.setFooter(mentionedMember.user.displayName,mentionedMember.user.displayAvatarURL({ dynamic: true }));
    .setFooter({ text: mentionedMember.user.username, iconURL: mentionedMember.user.displayAvatarURL({ dynamic: true })})
    i.deferUpdate();
interaction.editReply({ embeds: [embed], components: [row] })

}
      if(i.values[0] === 'roles') {
  const embed = new EmbedBuilder()
    .setAuthor({ name: `${mentionedMember.user.tag} Roles`, iconURL: mentionedMember.user.avatarURL()})
    .setColor(`${client.settings.embedcolor}`)
    .addFields([
{ name: "User Roles", value:  mentionedMember.roles.cache.map(r => `${r}`).join(',').replace('@everyone', ''), inline: true },
])

   // .setImage(mentionedMember.user.avatarURL({ dynamic: true, size: 2048 }))
  //.setFooter(mentionedMember.user.displayName,mentionedMember.user.displayAvatarURL({ dynamic: true }));
    .setFooter({ text: mentionedMember.user.username, iconURL: mentionedMember.user.displayAvatarURL({ dynamic: true })})
    i.deferUpdate();
interaction.editReply({ embeds: [embed], components: [row] })

}   
             })

       const am = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
          .setDisabled(true)
					.setCustomId('select')
					.setPlaceholder('Timed out')
					.setMinValues(1)
				//	.setMaxValues(3)
					.addOptions([
						{
							label: 'User Info',
							description: 'User Info',
							value: 'info',
              emoji: '<:tag:963525198848614400>',
						}
          ])
			);

       
           collector.on('end', i => {
         interaction.editReply({
         embeds: [Embed],
         components: [am],
         content: `Collector Ended`, 
    
   })
        })
  
	     
     })
     
     
     
	}
	
 }    
     
     
   
      
  
     