import DiscordJS, { Intents, Interaction } from 'discord.js'
import dotenv from 'dotenv'
import WOKCommands from 'wokcommands'
import path from 'path'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES

    ]
})

client.on('ready', () =>{
    console.log('MahchiiBot is online!')

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        testServers: '789648149537882162',
    })
})

client.login(process.env.TOKEN)