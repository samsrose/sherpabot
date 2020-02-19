const Discord = require("discord.js");
const askCommand = require("./askCommand");

const commandList = [{ command: "!", func: askCommand.process }];

async function budbot() {
  const client = new Discord.Client();

  client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on("message", async msg => {
    if (msg.author.bot) {
      return;
    }

    // Ignore messages that don't start with our prefix
    const commandPrefix = process.env.COMMAND_PREFIX;
    if (msg.content.toLowerCase().indexOf(commandPrefix) !== 0) {
      return;
    }

    // Separate command from its arguments
    const args = msg.content
      .slice(commandPrefix.length)
      .trim()
      .toLowerCase()
      .split(/ +/g);
    const command = args.shift().toLowerCase();

    // Validate and process commands
    const commandFunction = commandList.reduce(
      (commandFunction, currentEntry) => {
        if (currentEntry.command === command) {
          return (commandFunction = currentEntry.func);
        }
        return commandFunction;
      },
      null
    );

    if (commandFunction !== null) {
      commandFunction(msg, commandPrefix, command, args);
    } else {
      msg.reply(
        "Invalid command. Type `?`, to see a list of available commands."
      );
    }
  });

  await client.login(process.env.DISCORD_TOKEN);
}

module.exports = budbot;
