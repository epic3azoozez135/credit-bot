const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async() => {
var server = "509370079046270977"; // ايدي السررفر
var channel = "509708477854384138";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** - Azoz- Azoz- Azoz- Azoz- Azoz- Azoz- Azoz- Azoz- Azoz- Azoz- Azoz- Azoz- Azoz- Azoz- Azoz- Azoz- Azoz **')
    },305);
})


client.login(process.env.BOT_TOKEN);
