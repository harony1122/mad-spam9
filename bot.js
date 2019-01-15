const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("534589029769805834")
setInterval(function() {
channel.send(`haroony boots`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
