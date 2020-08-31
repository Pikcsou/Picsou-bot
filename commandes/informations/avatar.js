module.exports.run = async(client, message, args) => {

const Discord = require("discord.js");

    if(!message.guild.me.permissionsIn(message.channel.id).has("SEND_MESSAGES")) return;
    if(!message.guild.me.permissionsIn(message.channel.id).has("EMBED_LINKS")) return;


let member = message.member;
let user = message.mentions.users.first();

const embed = new Discord.MessageEmbed()

 .setColor("RANDOM")
 .setTitle(Avatar de ${user.tag})
 .setImage(user.displayAvatarURL({format: "jpg", size: 4096}));
 
 message.channel.send(embed)
 

};

module.exports.help = {
    name: "avatar",
    aliases: ["pdp"],
    description: "Donne l'avatar de quelqu'un",
    usage: "avatar <mention ou id>",
    cooldown: 10,
    userAdmin: false,
    userOwner: false
};
