const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async() => {
var server = "..."; // ايدي السررفر
var channel = "...";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam **')
    },305);
})


client.login(process.env.BOT_TOKEN);
