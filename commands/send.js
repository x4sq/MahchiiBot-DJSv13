"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'Configuration',
    description: 'Sends a message.',
    permissions: ['ADMINISTRATOR'],
    minArgs: 2,
    expectedArgs: '<channel> <text>',
    expectedArgsTypes: ['CHANNEL', 'STRING'],
    slash: 'both',
    testOnly: true,
    guildOnly: true,
    callback: function (_a) {
        var message = _a.message, interaction = _a.interaction, args = _a.args;
        var channel = (message ? message.mentions.channels.first() : interaction.options.getChannel('channel'));
        if (!channel || channel.type !== 'GUILD_TEXT') {
            return 'Please link a text channel.';
        }
        args.shift();
        var text = args.join(' ');
        channel.send(text);
        if (interaction) {
            interaction.reply({
                content: "Successfully sent \" " + text + " \" to <#" + channel.id + "> .",
                ephemeral: true,
            });
        }
    }
};
