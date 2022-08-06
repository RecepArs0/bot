const { ButtonStyle } = require("discord.js");
const { Collection } = require("discord.js");
const delay = new Collection();
const moment = require("moment");
const { ActionRowBuilder, ButtonBuilder } = require("discord.js");
const ms = require("ms");
const fs = require("fs");
const db = require("quick.db");
module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    const { EmbedBuilder } = require("discord.js");

    if (!interaction.isChatInputCommand()) return;
    const command = client.slashs.get(interaction.commandName);

    if (!command) return;

    if (command.pre) {
      const find = await client.userdata.findOne({
        redeemedBy: interaction.user.id,
      });

      if (find) {
        await command.execute(interaction, client);
      } else {
        const d = new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setStyle(ButtonStyle.Link)
            .setLabel("Support Server")
            .setEmoji("<:roket:887813266930278401>")
            .setURL(`${client.settings.dc}`)
        );

        return interaction.reply({
          ephemeral: true,
          components: [d],
          embeds: [
            new EmbedBuilder()
              .setThumbnail(interaction.user.avatarURL())
              .setColor(`${client.settings.embedcolor}`)
              .setTimestamp()
              .setDescription(
                `${client.emoji.x} | You must have premium to use this command. If you want to be premium, you can come to support server`
              ),
          ],
        });
      }
    }

    if (command) {
      const find = await client.blistdata.findOne({
        userid: interaction.user.id,
      });
      if (interaction.user.id !== client.settings.owner)
        if (find)
          return interaction.reply({
            ephemeral: true,
            content: `You are blacklisted! If you want to be whitelisted, you can come [HERE](${client.settings.dc})`,
          });
    }

    // delete command;
    if (command) {
      db.add("command", 1);
      const { EmbedBuilder, WebhookClient } = require("discord.js");

      const am = db.get("command");

      const webhookClient = new WebhookClient({
        id: "901809251503185931",
        token:
          "upmpVffO1Fn-zqCXOqeDgfDlZJudD0cwF0vvPHHQ9dxa_rvgIdJckvC565lSS2CUCha6",
      });

      const komut = new EmbedBuilder()
        .setTitle("Komut Log!")
        .setDescription(
          `
<:kalem_v2_abi:907645322648502292>Command name: ${command.data.name}
  
<:roket:887813266930278401>Total Command Usage This Month: ${am}

<:member:895667392489848872>Used By: ${interaction.user.tag} (${interaction.user.id}).
  
  `
        )

        .setColor(`${client.settings.embedcolor}`)
        .setThumbnail(interaction.user.avatarURL())
        .setTimestamp();

      webhookClient.send({
        embeds: [komut],
      });
    }

    try {
      if (command.permission)
        if (interaction.user.id !== client.settings.owner)
          if (!interaction.member.permissions.has(command.permission))
            return await interaction
              .reply({
                ephemeral: true,
                embeds: [
                  new EmbedBuilder()
                    .setThumbnail(interaction.user.avatarURL())
                    .setColor(`${client.settings.embedcolor}`)
                    .setTimestamp()
                    .setDescription(
                      `You must have ${command.permission} permission to use this command.`
                    ),
                ],
              })
              .catch(() => {});

      if (command.cooldown) {
        if (interaction.user.id !== "981181758043222096")
          if (delay.has(`${command.data.name}-${interaction.user.id}`))
            return interaction.reply({
              ephemeral: true,
              content: `You can use this command again after **${
                ms(
                  delay.get(`${command.data.name}-${interaction.user.id}`) -
                    Date.now(),
                  { long: true }
                ).includes("ms")
                  ? "0 second"
                  : ms(
                      delay.get(`${command.data.name}-${interaction.user.id}`) -
                        Date.now(),
                      { long: true }
                    )
              }**<:time:901901718630047774>`,
            });
        await command.execute(interaction, client);
        delay.set(
          `${command.data.name}-${interaction.user.id}`,
          Date.now() + command.cooldown * 1000
        );
        setTimeout(() => {
          delay.delete(`${command.data.name}-${interaction.user.id}`);
        }, command.cooldown * 1000);
      } else {
        await command.execute(interaction, client);
      }
    } catch (error) {
      console.log(error);
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  },
};
