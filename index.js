const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const moment = require("moment");


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();



//Handler pour commandes
fs.readdir("./commands/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée !");

    commandes.forEach((f) => {
        let commande = require(`./commands/${f}`);
        console.log(`${f} chargé !`);

        client.commands.set(commande.help.name, commande);

        if(commande.help.aliases) {
        commande.help.aliases.forEach(alias => {
            client.aliases.set(alias, commande.help.name);
        })};
    });
});


//Handler pour events
fs.readdir("./events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events chargés`);

    f.forEach((f) => {
        const events = require(`./events/${f}`);
        const event = f.split(" ")[0];

    client.on(event, events.bind(null, client));
    });
});
 
 
 client.login("NzE2OTU4NzM3MTg5MDQ0Mjg0.XwIuhA.v1q5xb5Fnh1teB_z3toLJT5-DYs");


client.on("ready", () => console.log("connecté"));
client.on("ready",() => client.user.setActivity("/ac puis /suggbot !"));