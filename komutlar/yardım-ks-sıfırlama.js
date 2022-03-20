const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setAuthor(client.user.username, client.user.avatarURL()).setColor(client.ekoayarlar.renk).setTitle(`**${client.user.username} | Kayıt Sistemi Sıfırlama Menüsü.**`).setDescription(`
 **${prefix}alınacak-rol sıfırla** \n-> Kayıt edilen kişiden alınacak rolü sıfırlar.
 **${prefix}kayıt-kanal sıfırla** \n-> Kayıtın yapılacağı kanalı sıfırlarsınız.
 **${prefix}kayıt-hg sıfırla** \n-> Kayıt hoş geldin kanalını sıfırlarsınız.
 **${prefix}kayıt-yetkili sıfırla** \n-> Kayıt edebilecek yetkiyi sıfırlar.
 **${prefix}erkek-rol sıfırla** \n-> Kayıt edilince verilecek erkek rolünü sıfırlar.
 **${prefix}kız-rol sıfırla** \n-> Kayıt edilince verilecek kız rolünü sıfırlar.
`).setThumbnail(client.user.avatarURL() ? client.user.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kayıt-s-s','kayıts-s','kayıtsistemisıfırla','KAYITS','KAYITSİSTEMİ','KAYIT-S','kyss'],
  permLevel: 0
}

exports.help = {
  name: 'kayıt-sistemi-sıfırla'
};