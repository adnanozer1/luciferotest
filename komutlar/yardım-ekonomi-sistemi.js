const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setAuthor(client.user.username, client.user.avatarURL()).setColor(client.ekoayarlar.renk).setTitle(`**Lucifero | Ekonomi Sistemi.**`).setDescription(`
**👤 ${Prefix}hesabım & ${Prefix}bilgiler**
> Hesap Bilgisini Gösterir.

📱 **${Prefix}bakiye**
> Bakiyeyi Gösterir.

💵 **${Prefix}cüzdan**
> Cüzdandaki Parayı Gösterir.

💳 **${Prefix}haftalıkmaaş & ${Prefix}maaş**
> Haftalık Maaşını Alırsın.

💸 **${Prefix}günlükpara & ${Prefix}günlük**
> Günlük Para Ödülü Alırsın.

🔨 **${Prefix}hesap-oluştur**
> Hesap Oluşturursun.

🧹 **${Prefix}hesap-sil**
> Hesap Silersin.

🗄 **${Prefix}kasalar**
> Kasaları Gösterir.

📪 **${Prefix}kasa-bilgi**
> Kasalar Hakkında Bilgi Alırsın.

📬 **${Prefix}kasa-aç**
> Kasa Açarsın.

📲 **${Prefix}transfer** 
> Belirtilen Kişiye Belirtilen Miktarda Para Gönderirsin.
`).setThumbnail(client.user.avatarURL ? client.user.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/937474798349606943/955073628708405278/Screencast-at-September-10th-2020-3.35.09-pm.gif').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ekonomis', 'ekonomi-s','EKONOMİSİSTEMİ','EKONOMİS','EKONOMİ-S'],
  permLevel: 0
}

exports.help = {
  name: 'ekonomisistemi'
};