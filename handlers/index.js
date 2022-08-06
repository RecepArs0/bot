const fs = require("fs");
const { MessageEmbed, Client, Discord } = require("discord.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');

module.exports = (client) => {
  client.slashCommands = async (slashsFolders, path) => {
    client.commandArrayy = [];
    try {
      client.on("ready", async (guild) => {
                      // await client.slashs.set([]);
        for (folder of slashsFolders) {
          const commandFiles = fs
            .readdirSync(`${path}/${folder}`)
            .filter((file) => file.endsWith(".js"));
          for (const file of commandFiles) {
            const commandData = require(`../commands/${folder}/${file}`);
            client.slashs.set(commandData.data.name, commandData);
            
            const guild = await client.guilds.fetch("887417966524784680");
            guild.commands.create(commandData.data);
            
            client.guilds.cache.forEach(async (sw) => {
      
              sw.commands.create(commandData.data);
              })
           
          }
        }
        //client.application.commands.set([commandData.data]);
        //console.log(commandData.data)              })
      });
      client.on("guildCreate", async (guild) => {
        await client.application.commands.set([]);
        for (folder of slashsFolders) {
          const commandFiles = fs
            .readdirSync(`${path}/${folder}`)
            .filter((file) => file.endsWith(".js"));
          for (const file of commandFiles) {
            const commandData = require(`../commands/${folder}/${file}`);
            client.slashs.set(commandData.data.name, commandData);
            //        client.commandArray.push(commandData.data.toJSON());

            await guild.commands.create(commandData.data);
          }
        }
      });
      
            console.log(
        "\nStarted refreshing application (/) commands.\nSuccessfully reloaded application (/) commands.\n"
      );
       } catch (error) {
      console.log(error);
    }
  }
  
};
