import { Intents, Client, MessageEmbed } from "discord.js";
import { factoids } from "./factoids";
import "dotenv/config";

const bot = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

bot.on("ready", () => {
  console.log("Logged in");
});

bot.on("messageCreate", message => {
  if (message.content.startsWith("?")) {
    const keyword = message.content.split(" ")[0].slice(1);
    const isDiscrete = message.content.includes("--discrete");
    //console.log(`keyword: ${keyword}`);
    const factoid = factoids.find(
      e => e.keyword === keyword || e.aliases?.includes(keyword)
    );
    if (!factoid) return;
    //console.log("omg theres a factoid");
    const senderPing = `<@${message.author.id}>`;
    let pingedPing = "";
    if (
      message.content.split(" ")[1] &&
      message.content.split(" ")[1].match(/^\d{18}$/)
    ) {
      pingedPing = `<@${message.content.split(" ")[1]}>`;
    } else if (
      message.mentions.users.size > 0 ||
      message.mentions.repliedUser
    ) {
      pingedPing = `<@${
        message.mentions.repliedUser?.id || message.mentions.users.firstKey()
      }>`;
    }
    
    const color = isDiscrete ? 0x2f3136 : 3447003;

    const embed = new MessageEmbed()
      .setColor(color)
      .setAuthor({ name: factoid.title })
      .setDescription(factoid.description)
      .setFooter({ text: factoid.footer || "" });

    message.channel.send({
      content: isDiscrete ? `${senderPing} ${pingedPing}` : "",
      embeds: [embed]
    });
  }
});

bot.login(process.env.TOKEN);
