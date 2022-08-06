      
const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js") 
const db = require('quick.db');
const { EmbedBuilder } = require("discord.js");
const {ActionRowBuilder, ButtonBuilder} = require("discord.js") 

const {  Client, Collection } = require('discord.js');
const akaneko = require('nsfw-discord');
 
  
module.exports = {
        pre: true,
     //   permission: "MANAGE_GUILD",
        cooldown: 2,
        data: new SlashCommandBuilder()
        .setName('nsfw')
        .setDescription('Nsfw Gifs')
        .addStringOption(option =>
        option.setName('category')
				.setDescription('Category of Nsfw?')
				.setRequired(true)
        .addChoices(
				{ name: 'Pussy', value: 'Pussy' },
				{ name: 'Ass', value: 'Ass' },
        { name: '4K', value: '4K' },
				{ name: 'Boobs', value: 'Boobs' }, 
        { name: 'Anal', value: 'Anal' },
				{ name: 'Gonewild', value: 'Gonewild' },
        { name: 'Anal', value: 'Anal' },
				{ name: 'Hentai Ass', value: 'Hentai Ass' },
        { name: 'Hentai', value: 'Hentai' },
				{ name: 'Wallpaper', value: 'Wallpaper' },
        { name: 'Porngif', value: 'Porngif' },
				{ name: 'Thigh', value: 'Thigh' })),
           async execute(interaction, client) {
  const am = interaction.options.getString('category');
           
       if(!interaction.channel.nsfw) {
         const pez = new EmbedBuilder()
	.setColor(client.settings.embedcolor)
	.setTitle(`This channel dosen't support nsfw content`)
	.setImage('https://media.discordapp.net/attachments/912052545713762334/977565901308182618/1644513848_740_Hoe-maak-je-een-NSFW-kanaal-op-Discord.png')
	.setTimestamp()
         
	interaction.reply({embeds: [pez] }) 


    //  return message.reply("This channel dosen't support nsfw content")
      
    } else {
      if(am === 'Ass') {
        const nsfw = new akaneko();

const image = await nsfw.ass();
                const yasim = new EmbedBuilder()
	.setColor(client.settings.embedcolor)
	.setTitle(`${am} Nsfw`)
	.setImage(`${image}`)
	.setTimestamp()
         
	interaction.reply({embeds: [yasim],   }) 
}
    if(am === '4K') {
        const nsfw = new akaneko();

const image = await nsfw.fourk();
                const yasim = new EmbedBuilder()
	.setColor(client.settings.embedcolor)
	.setTitle(`${am} Nsfw`)
	.setImage(`${image}`)
	.setTimestamp()
         
	interaction.reply({embeds: [yasim],   }) 

}
  
         if(am === 'Boobs') {
        const nsfw = new akaneko();

const image = await nsfw.boobs();
                const yasim = new EmbedBuilder()
	.setColor(client.settings.embedcolor)
	.setTitle(`${am} Nsfw`)
	.setImage(`${image}`)
	.setTimestamp()
         
	interaction.reply({embeds: [yasim],   }) 

}
      if(am === 'Anal') {
        const nsfw = new akaneko();

const image = await nsfw.anal();
                const yasim = new EmbedBuilder()
	.setColor(client.settings.embedcolor)
	.setTitle(`${am} Nsfw`)
	.setImage(`${image}`)
	.setTimestamp()
         
	interaction.reply({embeds: [yasim],   }) 

}
      if(am === 'Gonewild') {
        const nsfw = new akaneko();

const image = await nsfw.gonewild();
                const yasim = new EmbedBuilder()
	.setColor(client.settings.embedcolor)
	.setTitle(`${am} Nsfw`)
	.setImage(`${image}`)
	.setTimestamp()
         
	interaction.reply({embeds: [yasim],   }) 

} 
 
           if(am === 'Hentai-Ass') {
        const nsfw = new akaneko();

const image = await nsfw.hentaiass();
                const yasim = new EmbedBuilder()
	.setColor(client.settings.embedcolor)
	.setTitle(`${am} Nsfw`)
	.setImage(`${image}`)
	.setTimestamp()
         
	interaction.reply({embeds: [yasim],   }) 

} 
        if(am === 'Hentai') {
        const nsfw = new akaneko();

const image = await nsfw.hentai();
                const yasim = new EmbedBuilder()
	.setColor(client.settings.embedcolor)
	.setTitle(`${am} Nsfw`)
	.setImage(`${image}`)
	.setTimestamp()
         
	interaction.reply({embeds: [yasim],   }) 

} 
 
       if(am === 'Wallpaper') {
        const nsfw = new akaneko();
         const image = await nsfw.wallpaper();

                const yasim = new EmbedBuilder()
	.setColor(client.settings.embedcolor)
	.setTitle(`${am} Nsfw`)
	.setImage(`${image}`)
	.setTimestamp()
         
	interaction.reply({embeds: [yasim],   }) 

} 
           if(am === 'Porngif') {
        const nsfw = new akaneko();
         const image = await nsfw.pgif();

                const yasim = new EmbedBuilder()
	.setColor(client.settings.embedcolor)
	.setTitle(`${am} Nsfw`)
	.setImage(`${image}`)
	.setTimestamp()
         
	interaction.reply({embeds: [yasim],   }) 

} 
        
            if(am === 'Thigh') {
        const nsfw = new akaneko();
         const image = await nsfw.thigh();

                const yasim = new EmbedBuilder()
	.setColor(client.settings.embedcolor)
	.setTitle(`${am} Nsfw`)
	.setImage(`${image}`)
	.setTimestamp()
         
	interaction.reply({embeds: [yasim],   }) 

} 
      if(am === 'Pussy') {
        const nsfw = new akaneko();
         const image = await nsfw.pussy();

                const yasim = new EmbedBuilder()
	.setColor(client.settings.embedcolor)
	.setTitle(`${am} Nsfw`)
	.setImage(`${image}`)
	.setTimestamp()
         
	interaction.reply({embeds: [yasim],   }) 

} 
            
           
      
  
        }
      
      
      
      
      
      
      
             
             
             
             
             }
  }

            
