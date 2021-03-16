const sokang = "513808991147655168";
import { Client } from "discord.js";
import { config } from "dotenv";
var flag = 0;
var self;
config();

const client = new Client();

client.once("ready", () => console.log("sus"));

client.on("message", async (msg) => {
    self = msg.guild.member(client.user);
    try {
        buildErrorsAndSend(msg.channel);
        if (msg.author.id == sokang) {
            try {
                sendLRandomly(msg.channel);
                const suskang = msg.guild
                    .emojis
                    .cache
                    .find(emoji => emoji.name === "suskang");
                await msg.react(suskang);
            } catch {
                msg.channel.send("something went wrong 😔\nmaybe :suskang: doesnt exist");
            }
        }
    } catch {
        if (!flag)
            flag != flag;
    }
});

client.login(process.env.SECRET);



function buildErrorsAndSend(channel) {
    if (flag) {
        channel.send("YOU ABSOLUTE RETARD HOW DARE MUTE ME!!!!!!!!!!!!!!!!!");
        flag != flag;
        return;
    }
    return;
}

function sendLRandomly(channel){
    let now = Date.now();
    if(now%100 == 0){
        channel.send("LLLLLLLLLLLLLLLLLLL");
    }
}