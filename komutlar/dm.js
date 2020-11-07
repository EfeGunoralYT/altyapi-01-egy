const Discord = require('discord.js');
let ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix;


exports.run = function(client, msg) {
//Kodlar
  msg.delete(3000)
  let mesaj = msg.mentions.members.first();
let msgd = msg.content.substring(3);
if(!mesaj){
  msg.reply('**❌ DM atmam için bir kullanıcı etiketlemelisin.! [' + prefix + 'dm [@Kullanıcı] [mesaj]**');
}if(mesaj){
  if(!msg.member.hasPermissions("ADMISTRATOR")){
    msg.reply('**❌ Yetkiniz yetmiyor..**');
  }else{
    const Embed = new Discord.RichEmbed()
    .setTitle('Bir mesaj')
    .setDescription('Sana bir mesaj geldi;\n**'+msgd+'**')
        mesaj.send(Embed);
      msg.reply('**Mesaj gönderildi! ✅**').then(msg=> msg.delete(2000))
    }
}
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['dm'], //farklı çağrılar ekledik
  permLevel: 3 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name:'dm', //adını belirledik (kullanmak için gereken komut)
  description: 'Belirlediğiniz kişiye DMden mesaj atar.', //açıklaması
  usage: 'dm' //komutun kullanım şekli (mesela hava <bölge>)
};