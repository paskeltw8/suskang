const sokang = "513808991147655168";
const Discord = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();

const client = new Discord.Client();

client.once("ready", () => console.log("sus"));

client.on("message", async (msg) => {
    if (msg.author.id == sokang) {
        try {
            const suskang = msg.guild
                .emojis
                .cache
                .find(emoji => emoji.name === "suskang");
            await msg.react(suskang);
        } catch { 
            msg.channel.send("something went wrong 😔\nmaybe :suskan: doesnt exist");
        }
    }
});

client.login(process.env.SECRET);