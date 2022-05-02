const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => { 
const sahip = 'Pizzacı Çocuk#3743'

message.channel.send("Benim Yapımcım: `" + sahip + "`")
}
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['yapımcı'], 
  permLevel: 0,
  kategori: "Moderasyon" 

};

exports.help = {
 name: 'sahip'
};