const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let botrol = db.fetch(`botrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)

 
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`Bu komudu kullanabilmen için <@&${kayıtçı}> adlı role sahip olman lazım!`)
if(message.channel.id !== kanal) return message.channel.send(` Bu komudu sadece <#${kanal}> adlı kanalda kullanabilirsin!`)
if (!botrol) return message.channel.send(`Sunucuda bot rolü ayarlanmadığı için komut kullanılamaz!`)


let member = message.mentions.members.first();
if (!member) return message.channel.send(`Bot olarak kayıt edeceğin kullanıcıyı belirtmelisin!`)
member.roles.remove(alınacakrol)
member.roles.add(botrol)

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Bot Kayıt`)
.setColor(0x36393F)
.setDescription(` Bot olarak kayıt edilen kullanıcı: ${member} \n Bot olarak kayıt eden yetkili: <@!${message.author.id}>`)
.addField(`Kullanıcının Rolü:`, `${botrol}`, true)
.setThumbnail(member.avatarURL())
.setFooter(`Morfinn`)
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['b'],
  permlevel: 0
}
exports.help = {
  name: 'bot',
  description: 'bot olarak kayıt eder',
  usage: '.bot @kullanıcı isim yaş'
}