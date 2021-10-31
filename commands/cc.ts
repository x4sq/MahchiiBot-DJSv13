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



        const messages = await channel.messages.fetch({ limit: amount })
        const { size } = messages

        messages.forEach((message) => message.delete())

        const reply = `Deleted ${size} message(s) successfully.`

        if(interaction){
            return reply
        }


    }
} as ICommand