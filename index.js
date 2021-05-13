const { Client } = require('discord-rpc');

const client = new Client({ transport: 'ipc' })

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Yep join it :>",
            assets: {
                large_image: "big",
                large_text: "Do it! ;>",
                small_image: "big",
                small_text: "Made by Stew#1902"
            },
            buttons: [
                { label: "Join My Server :>", url: "https://discord.gg/3ws6Bjq" },
                { label: "Socials", url: "https://linktr.ee/henkdnb" }
            ]
        }
    })
    .catch(console.error)
    console.log("Status is ready to use!");
});

client.login({ clientId: "841936186297417748" }).catch(console.error);

