const prefix = "/";
const { readFileSync } = require("fs");
const { MessageEmbed } = require("discord.js");
module.exports = async(client, message) => {
    if(!message.guild) return;
    if(message.channel.type === "dm") return;
    
    const fichier = JSON.parse(readFileSync("./commands/serveur.json"));
    if(!fichier[message.guild.id]) { fichier[message.guild.id] = {}; };

    let Prefix;
    if(!fichier[message.guild.id].prefix) { Prefix = prefix; } else { Prefix = fichier[message.guild.id].prefix; };

    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Mon préfixe est \`${Prefix}\` \n Exécutez la commande \`${Prefix}help\` pour obtenir la liste de mes commandes !`)
    .setTimestamp()
    if(message.mentions.users.has(client.user.id)) message.channel.send(embed).then(m => m.delete({timeout : 10000}));
    
    if(!message.content.startsWith(Prefix)) return;
    if(message.author.bot) return;

    const args = message.content.slice(Prefix.length).trim().split(/ +/g);
    const commande = args.shift().toLowerCase();
    const cmd = client.commands.get(commande) || client.commands.get(client.aliases.get(commande));
    if(!cmd) return;
    
    const blockedUsers = [""];
    if(blockedUsers.includes(message.author.id)) return message.reply("vous avez été blacklisté. En cas de contestations, veuillez contacter le support.");

    cmd.run(client, message, args);
};