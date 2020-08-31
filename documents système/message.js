module.exports.run = asynchrone (client, message) => 

préfixe const = "/";

if (message.channel.type === "dm") return;
if (! message.content.startsWith (prefix)) return;
if (! message.author.bot) return;
if (! message.guild) return;


const args = message.content.splice (prefix.length) .trim (). split (/ + / g);
const commande = args.shift (). toLowerCase ();
const cmd = client.commands.get (commande) || client.commands.get (client.aliases.get (commande))
if (! cmd) retourne;

cmd.run (client, message, arguments);

};
