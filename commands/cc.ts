import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Moderation',
    description: 'Clear/purges the channels messages.',

    permissions: ['MANAGE_MESSAGES'],
    requireRoles: true,

    minArgs: 1, 
    maxArgs: 1,
    expectedArgs: '[amount]',

    slash: "both",
    testOnly: true,

    callback: async ({ message, interaction, channel, args }) => {
        const amount = args.length ? parseInt(args.shift()!) : 10

        if(message) {
            await message.delete()
        }

        const { size } = await channel.bulkDelete(amount, true)


        const reply = new MessageEmbed()
        .setAuthor('MahchiiBot', 'https://cdn.discordapp.com/avatars/904059851104215080/bce063dde4cdd1fc2e9afb5bc217d440.png?size=60')
        .setTimestamp()
        .setDescription(`Deleted ${size} message(s) from <#${channel}> successfully.`)
        .setColor('WHITE')


        if(interaction){
            return reply
        }


    }
} as ICommand

