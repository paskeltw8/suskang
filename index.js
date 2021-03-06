const sokang = "513808991147655168";
const Discord = require("discord.js");
const dotenv = require("dotenv");
var flag = 0;
dotenv.config();

const client = new Discord.Client();

client.once("ready", () => console.log("sus"));

client.on("message", async (msg) => {
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
            flag != fag;
    }
});

client.login("ODE1MTg2NTAxNjMyNzg2NDQ5.YDovlw.jt1XWMVGKxDfN2iPJwDPnGiktjE");



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