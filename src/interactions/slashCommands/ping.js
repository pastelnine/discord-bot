export const SlashCmd = {
    name: "ping",
    description: "Get client websocket latency.",
    run: (interaction, client) => {
        interaction.reply({
            content: `Pong! **${client.ws.ping} ms**.`
        })
    }
};