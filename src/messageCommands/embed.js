import { EmbedBuilder } from "discord.js";

export const MsgCommand = {
    name: "embed",
    aliases: ["emb"],
    run: async (client, message) => {
        const content = message?.content?.substring(message?.content?.indexOf(" ") + 1);

        const data = content?.split("<break>");

        if (!data || data.length < 1) return message.reply({ content: `Enter embed content. Usage: \`.embed title:Title Content here <break> description: Description content here <break> color:#FFFFFF <break> footer:Footer content here <break> image:Image URL Here <break> thumbnail:Thumbnail Image URL here\`. Use **<break>** to separate each section, available sections: **title**, **description**, **color**, **footer**, **image**, and **thumbnail**.` });

        const embed = new EmbedBuilder();

        const title = data?.find((x) => x?.trim()?.startsWith('title:'));
        const description = data?.find((x) => x?.trim()?.startsWith('description:'));
        const color = data?.find((x) => x?.trim()?.startsWith('color:'));
        const footer = data?.find((x) => x?.trim()?.startsWith('footer:'));
        const image = data?.find((x) => x?.trim()?.startsWith('image:'));
        const thumbnail = data?.find((x) => x?.trim()?.startsWith('thumbnail:'));

        if (!title && !description && !image) return message.reply({ content: `At least one parameter among: embed **title**, **description** or **image** is required. Usage: \`.embed title:Title Content here <break> description: Description content here <break> color:#FFFFFF <break> footer:Footer content here <break> image:Image URL Here <break> thumbnail:Thumbnail Image URL here\`. Use **<break>** to separate each section, available sections: **title**, **description**, **color**, **footer**, **image**, and **thumbnail**.` });

        try {
            if (title && typeof title === 'string') {
                const x = title?.replace("title:", "");
                embed.setTitle(x);
            }

            if (description && typeof description === 'string') {
                const x = description?.replace("description:", "");
                embed.setDescription(x);
            }

            if (color && typeof color === 'string') {
                const x = color?.replace("color:", "");
                embed.setColor(x);
            }

            if (footer && typeof footer === 'string') {
                const x = footer?.replace("footer:", "");
                embed.setFooter(x);
            }

            if (image && typeof image === 'string') {
                const x = image?.replace("image:", "");
                embed.setImage(x);
            }

            if (thumbnail && typeof thumbnail === 'string') {
                const x = thumbnail?.replace("thumbnail:", "");
                embed.setThumbnail(x);
            }

            if (!color) {
                embed.setColor('Green')
            }

            await message.channel.send({
                embeds: [embed]
            });
        } catch (error) {
            console.error(error);
            message.reply({
                content: `Oopsie! An error occured.`,
                embeds: [
                    new EmbedBuilder()
                        .setDescription(error?.message || 'Unknown Error. If you are a developer, please check the console for more information.')
                        .setColor('Red')
                ]
            });
        }
    }
};