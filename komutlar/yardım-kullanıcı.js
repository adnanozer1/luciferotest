
const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setAuthor(client.user.username, client.user.avatarURL()).setColor(client.ekoayarlar.renk).setTitle(`**Lucifero | Kullanıcı Yardım Menüsü.**`).setDescription(`
 **${Prefix}kurallar** \n-> Hazır Kurallar Gönderir.
 **${Prefix}davet** \n-> Botu davet edersiniz.
 **${Prefix}shardbilgi** \n-> Botun shard bilgilerini gösterir.
 **${Prefix}pp** \n-> Etiketlediğiniz kişinin avatarını gösterir.
 **${Prefix}randompp** \n-> Botun ekli olduğu sunuculardaki her hangi birinin avatarını atar.
 **${Prefix}sonmesaj** \n-> Yazdığınız son mesajı gösterir.
`).setThumbnail(client.user.avatarURL() ? client.user.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['KULLANICI'],
  permLevel: 0
}

exports.help = {
  name: 'kullanıcı'
};
  
  
/*//----------------EKLENECEK---------------\\
 **${Prefix}öneri** \n-> Bota öneri belirtirsiniz.
 **${Prefix}istatistik** \n-> Botun istatistiğini gösterir.
*/