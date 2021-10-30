import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES

    ]
})

client.on('ready', () =>{
    console.log('MahchiiBot is online!')


const guildId = '789648149537882162'
const guild = client.guilds.cache.get(guildId)
let commands 

if(guild){
    commands = guild.commands
}else{
    commands = client.application?.commands
}

commands?.create({
    name: 'ping',
    description: 'replies with pong'
})

})

client.login(process.env.TOKEN)