import 'dotenv/config'
import { Client, IntentsBitField } from 'discord.js';

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online`);
});

client.on('messageCreate', (msg) => {
    if (msg.content === "hello" && !msg.author.bot ) {
        msg.reply(`Hi ${msg.author.globalName}`);
    }
});

client.login(process.env.TOKEN);