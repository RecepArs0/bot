const  {Discord, EmbedBuilder, WebhookClient, Colors} = require('discord.js')
const moment = require("moment");
require("moment-duration-format");
const { ShardingManager } = require("discord.js");

const manager = new ShardingManager('./index.js', { token: process.env.TOKEN, totalShards: 1, });

 

//https://discord.com/api/webhooks/901809251503185931/upmpVffO1Fn-zqCXOqeDgfDlZJudD0cwF0vvPHHQ9dxa_rvgIdJckvC565lSS2CUCha6
const webhook_id = '901809251503185931'
const webhook_token = 'upmpVffO1Fn-zqCXOqeDgfDlZJudD0cwF0vvPHHQ9dxa_rvgIdJckvC565lSS2CUCha6'
manager.on('shardCreate', async(i) => {
console.log(`${Number(i.id)+1} / 1 Id' li Shard kullanıma hazır!`)
const shardlog = new WebhookClient({id: webhook_id, token: webhook_token});
const embed = new EmbedBuilder() 
.setDescription(`<:sgs_tick:921392926683197460> **${Number(i.id)+1} / 1** Id' li Shard kullanıma hazır!`)
.setColor("#4951be")
shardlog.send({embeds: [embed]});
})
manager.on('shardDisconnect', async(i) => {
const shardlog = new WebhookClient({id: webhook_id, token: webhook_token});
const embed = new EmbedBuilder() 
.setDescription(`<:sgs_error:921392927568195645> **${Number(i.id)+1} / 1** Id' li Shard' ın bağlantısı kesildi!`)
.setColor("#4951be")
shardlog.send({embeds: [embed]});
})
manager.on('shardReconnecting', async(i) => {
const shardlog = new WebhookClient({id: webhook_id, token: webhook_token});
const embed = new EmbedBuilder() 
.setDescription(`<:sgs_tick:921392926683197460> **${Number(i.id)+1} / 1** Id' li Shard yeniden bağlandı!`)
.setColor("#4951be")
shardlog.send({embeds: [embed]});
})
manager.spawn();