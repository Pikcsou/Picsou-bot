const { readFileSync } = require("fs");
const Discord = require("discord.js");
module.exports = async (client, member) => {
    const fichier = JSON.parse(readFileSync("./commands/serveur.json"))[member.guild.id];
    let leave;

    if(!fichier) return;
    else leave = member.guild.channels.cache.get(fichier.leave);

    if(!leave || !member.guild.me.permissionsIn(leave.id).has(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS", "READ_MESSAGE_HISTORY", "ADD_REACTIONS"])) return;

    let embed = new Discord.MessageEmbed()
    .setColor("#27AE60")
    .setTitle(`<:arrow_leave:785931437307199538> ${member.user.tag} nous a quitté !`)
    .addField("Nous sommes désormais:", member.guild.members.cache.size, true)
    .setFooter("Pourquoi avoir quitté ?!")
    .setTimestamp()

    return leave.send(embed).then(msg => {
        msg.react("😰")
        msg.react("😭")
     });
};