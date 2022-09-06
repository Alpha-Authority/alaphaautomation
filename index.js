// By ScriptIntelligence

// Structure Setup

// node_modules
// modules
// settings
// events
// startup
// functions

// // //

const fs = require('fs');
const { Client, GatewayIntentBits, Discord } = require('discord.js');



// // //

const clientSystem = './System/Client';

// // //

const token = process.env.TOKEN;
const prefix = process.env.PREFIX;

//

const Client = new Discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ]
})
//


Client.login(token);

//

const clientFiles = fs.readdirSync(clientSystem).filter(file => file.endsWith('.js'));

for (const file of clientFiles) {
    const clientFile = require(clientSystem + '/' + file)
    clientFile(Client);
}

//const clientFilesMjs = fs.readdirSync(clientSystem + '/Mjs').filter(file => file.endsWith('.mjs'));

//for (const file2 of clientFilesMjs) {
//    const clientFile2 = require(clientSystem + '/Mjs/' + file2)
    //clientFile2(client);
//}