const fs = require("fs");
require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.TOKEN);

let readMe = fs.readFileSync("data.txt", "utf8").split("\n");

let prefix = process.env.PREFIX;

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();

    if (command == "getmotion") {
        let motion = readMe[Math.floor(Math.random() * 6914)];
        message.channel.send(motion);
        console.log(motion);
    }if (command == "info"){
      message.channel.send('Created by: Rohan Nair');
      message.channel.send('The motions used by this bot are from HelloMotions');
    }
});
