  
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const moment = require("moment");


client.commandes = new Discord.Collection();
client.alias = new Discord.Collection();



// Handler pour commandes
fs.readdir("./commands/", (error, f) => {
    if(error) console.warn(error);

	let commandes = f.filter(f => f.split(".").pop() === "js")
    if(commandes.length === 0) console.warn("Aucune commande trouvée!")

    commandes.forEach(f => {
		let commande = require(`./commands/${f}`);
		console.log(`${f} chargé!`)

        client.commandes.set(commande.help.name, commande);

        if(commande.help.alias){
        commande.help.alias.forEach(alias => {
            client.alias.set(alias, commande.help.name);
        })};
    });
});


// Handler pour les événements
fs.readdir("./events", (error, f) => {
	if(error) console.warn(error);
	console.log(`${f.length} évènements chargés!`)
	f.forEach(f => {
		const events = require(`./events/${f}`);
		const event = f.split("")[0];
	})
	client.on(event, events.bind(null, client));
});
 
client.log("NzE2OTU4NzM3MTg5MDQ0Mjg0.XwIuhA.v1q5xb5Fnh1teB_z3toLJT5-DYs");

client.on("ready", () => {
	console.log(`Connecté!`)
	bot.user.setActivity("Salut!")
})
