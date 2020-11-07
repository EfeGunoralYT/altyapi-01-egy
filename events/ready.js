const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
        client.user.setActivity("npm i egy-io@0.0.1", {type: "PLAYING"});
        client.user.setStatus("online");
        
};
