import * as dotenv from "dotenv";
dotenv.config();
import { Client, Message } from "discord.js";

const client: Client = new Client();

const cmdPrefix: string = "!";

client.on("message", (message: Message) => {
  // If message author is bot return
  if (message.author.bot) return;

  // If message content doesn't start with the command prefix return
  if (!message.content.startsWith(cmdPrefix)) return;

  const cmdBody: string = message.content.slice(cmdPrefix.length);
  const args: string[] = cmdBody.split(" ");
  const command: string | undefined = args.shift()?.toLowerCase();

  switch (command) {
    case "ping":
      message.reply("Pong!");
      break;
    case "time":
      message.reply(`The current time is ${Date.now()}`);
      break;
    case "oi":
      message.reply("https://i.kym-cdn.com/photos/images/original/001/861/981/b24.png");
    default:
      return;
  }
});

client.login(process.env.BOT_TOKEN);
