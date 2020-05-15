const Discord = require('discord.js');
const client = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = require('fs')
let config = require('./botconfig.json')
let token = config.token
let prefix = config.prefix

client.on('ready', () => {
  console.log(`Бот по имени ${client.user.tag} проснулся!`);
  
});

client.on('message', msg => {
  if (msg.content === 'h!test') {
    msg.reply('Work harder, good job!');
  }
});

client.login(token);