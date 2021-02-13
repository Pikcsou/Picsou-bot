const Discord = require("discord.js");
	module.exports = async(client, guild) => {
	         const region = {
            "brazil" : "Brazil <:brsil:763422522846216212>",
            "europe" : "Europe <:drapeaueu:763419031427612702>",
            "hongkong" : "Hong Kong <:hongkong:763422523127234580>",
            "india" : "Indien <:india:763422523244150785>",
            "japan" : "Japon <:japon:763422523294482473>",
            "russia" : "Russie <:russe:763422599043743804>",
            "singapore" : "Singapoure <:singapour:763431736133550130>",
            "southafrica" : "Afrique du sud <:afriquedusud:763431750995017738>",
            "sydney" : "Sydney <:sydney:789565012082819082>",
            "us-central" : "Amérique central <:us:763809936881745961>",
            "us-east" : "Amérique de l'est <:us:763809936881745961>",
            "us-south" : "Amérique du sud <:us:763809936881745961>",
            "us-west" : "Amérique de l'ouest <:us:763809936881745961>"
            }
	
	 const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(guild.iconURL())
      .setTitle("J'ai été retiré d'un serveur !")
      .setDescription(`${guild.name} m'a supprimé de son serveur.`)
      .addField("Nom :", guild.name, true)   
      .addField("Créateur :", guild.owner.user.tag, true)
      .addField("Total de membres :", guild.members.cache.size, true)
      .addField("Région du Serveur :", region[guild.region], true)
      .setFooter(`À cause de ${guild.name}, je ne suis plus que dans ${client.guilds.cache.size} serveurs !`)
      .setTimestamp()
      
      client.channels.cache.get("732938656674742313").send(embed);
     };