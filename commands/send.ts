import { ICommand } from "wokcommands";
import { TextChannel } from 'discord.js';

export default {
    category: 'Configuration',
    description: 'Sends a message.',

    permissions: ['ADMINISTRATOR'],

    minArgs: 2,
    expectedArgs: '<channel> <text>',
    expectedArgsTypes: ['CHANNEL', 'STRING'],


    slash: 'both',
    testOnly: true,
    guildOnly: true,

    callback: ({ message, interaction, args }) => {
        const channel = (message ? message.mentions.channels.first() : interaction.options.getChannel('channel')) as TextChannel
        if(!channel || channel.type !== 'GUILD_TEXT'){
            return 'Please link a text channel.'
        }

        args.shift()
        const text = args.join(' ')

        channel.send(text)

        if(interaction){
            interaction.reply({
                content: `Successfully sent " ${text} " to <#${channel.id}> .`,
                ephemeral: true,
            })
        }
    }
} as ICommand