import { MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Roblox',
    description: 'Sends the Roblox Group link',

    slash: true,
    testOnly: true,


    callback: async ({ interaction: msgInt }) => {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setURL('https://google.com')
                .setEmoji('☑')
                .setLabel('Roblox Group')
                .setStyle('LINK')
        )

        await msgInt.reply({
            content: 'Roblox Group',
            components: [row],
            ephemeral: true,
        })
    }



} as ICommand