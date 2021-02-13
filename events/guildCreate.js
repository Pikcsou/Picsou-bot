const { Guild } = require("../models/main.js");
const mongoose = require("mongoose")

module.exports = async guild => {
      const merged = Object.assign({_id: mongoose.Types.ObjectId()}, guild);
      const createGuild = await new Guild(merged);
      createGuild.save().then(g => console.log(`Nouveau serveur: ${g}`));
};
