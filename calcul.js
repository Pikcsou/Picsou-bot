module.exports.run = async(client, message, args) => {
  if(!message.guild.me.permissionsIn(message.channel.id).has("SEND_MESSAGES")) return;
    const math = require("mathjs");

    if(!args.join(" ")) return message.channel.send("Veuillez mettre un calcul à exécuter !");
    if(args[0].includes(",")) return message.reply("veuillez mettre un nombre entier !");
    
      let res = math.evaluate(args.join(" "));
      if(typeof res !== "number") return message.channel.send("Calcul invalide !");
      return message.channel.send(res);

};
module.exports.help = {
    name: "calcul",
    aliases: ["calc"],
    description: "Permet de réaliser un calcul.",
    usage: "calcul <calcul>",
    cooldown: 5,
    category: "utilitaires"
};
