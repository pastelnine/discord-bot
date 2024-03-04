export const MsgCommand = {
    name: "ping",
    aliases: [],
    run: (client, message) => {
        message.channel.send({
            content: `Pong! **${client.ws.ping} ms**.`
        });
    }
};