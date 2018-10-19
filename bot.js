const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});







client.on("ready", () => {
let channel =     client.channels.get("502157655054221332")
setInterval(function() {
channel.send(`asdfasdfasdfasdgausodghaskldfgvbaskhydfalsdfglidf`);
}, 25)
})








// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
