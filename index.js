const sokang = "513808991147655168";
const discord = require("discord.js");
var flag = 0;
var self;

const client = new discord.Client();

client.once("ready", () => console.log("sus"));

client.on("message", async (msg) => {
    ping(msg.channel, ["513808991147655168"]); //add more members
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

client.on('messageUpdate', async (msg) => {
    if (msg.author.bot) return;
    await msg.channel.send(`lol <@${msg.author.id}> is a retard who cant even spell`);
});


// client.login(process.env.SECRET);
client.login(process.env.SECRET);



// ================================================================================
function buildErrorsAndSend(channel) {
    if (flag) {
        channel.send("YOU ABSOLUTE RETARD HOW DARE MUTE ME!!!!!!!!!!!!!!!!!");
        flag != flag;
        return;
    }
    return;
}

function sendLRandomly(channel) {
    let now = Date.now();
    if (now % 100 == 0) {
        channel.send("LLLLLLLLLLLLLLLLLLL");
    }
}

//pings one of the targets randomly if message not sent by author
function ping(channel, targets, author = "815186501632786449") {
    let now = Date.now();
    if (now % 77 == 0) {
        if (author == "815186501632786449")
            return;
        let cur = targets[Math.floor(Math.random() * targets.length)];
        channel.send(`<@${cur}> hah get pinged`);
    }
}