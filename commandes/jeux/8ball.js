odule.exports.run = async (client, message, arguments) => {

const Discord = require ("discord.js");

if (! message.guild.me.permissionIn (message.channel.id) .has ("SEND_MESSAGES")) return;
if (! message.guild.me.permissionIn (message.channel.id) .has ("EMBED_LINKS")) return;

if (! args [1]) return message.channel.send ("Veuillez poser une question!")
if (! args.join ("") .lenght> 255) return message.channel.send ("Veuillz mettre une question avec moins d'arguments!")


const 8ball = ["Oui", "Non", "JSP"];
8ball = 8ball [Math.floor (Math.random () * 8ball.lenth)];

const embed = nouveau Discord.MessageEmbed ()

.setColor ("RANDOM")
.setDescription (`** Question: ** $ {args.join (" ")} \ n \ n \ n ** Réponse: ** $ {8ball}`);

return message.channel.send (incorporer);

};

module.exports.help = {
nom: "8ball",
alias: ["Question"],
utilisation: "8ball <question>,
temps de recharge: 0

};
© 2020 GitHub, Inc.
