const { readFileSync } = require("fs");
const Discord = require("discord.js");
module.exports = async (client, member) => {
    const fichier = JSON.parse(readFileSync("./commands/serveur.json"))[member.guild.id];
    let welcome;

    if(!fichier) return;
    else welcome = member.guild.channels.cache.get(fichier.welcome);

    if(!welcome || !member.guild.me.permissionsIn(welcome.id).has(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS", "READ_MESSAGE_HISTORY", "ADD_REACTIONS"])) return;

    let embed = new Discord.MessageEmbed()
    .setColor("#27AE60")
    .setTitle(`<:arrow_join:785931507217727528> ${member.user.tag} nous a rejoins !`)
    .addField("Nous sommes désormais:", member.guild.members.cache.size, true)
    .setFooter("Merci d'avoir rejoins !")
    .setTimestamp()

    return welcome.send(embed).then(msg => {
        msg.react("👍")
        msg.react("😎")
     });
};