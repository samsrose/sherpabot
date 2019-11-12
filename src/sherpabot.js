const Discord = require('discord.js');
const helpcmds = require('./helpcmds');
const doccmds = require('./doccmds');

async function sherpabot() {
  const client = new Discord.Client();

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('message', async msg => {
    const commandPrefix = process.env.COMMAND_PREFIX;
    if(msg.author.bot) {
      return;
    }
    // Ignore messages that don't start with our prefix
    if(msg.content.indexOf(commandPrefix) !== 0) {
      return;
    }
    // Separate command from its arguments
    const args = msg.content.slice(commandPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Validate and process commands
    switch(command) {
      // Display list of commands
      case '':
      case 'cmds':
      case 'help':
        helpcmds(msg, commandPrefix, command, args);
        break;
      // Display documentation URL's
      case 'doc':
        doccmds(msg, commandPrefix, command, args);
        /*
        if (args.length === 0) {
          msg.reply('https://docs.chingu.io');
        }
        else if (args[0] === 'chingu') {
          msg.reply('https://chingu.docs.chingu.io');
        }
        else if (args[0] === 'voyage') {
          msg.reply('https://voyage.docs.chingu.io');
        }
        else if (args[0] === 'pair') {
          msg.reply('https://pairprog.docs.chingu.io');
        }
        else if (args[0] === 'tech') {
          msg.reply('https://techres.docs.chingu.io');
        }
        else if (args[0] === 'proj') {
          msg.reply('https://projres.docs.chingu.io');
        }
        */
        break;
      // If command was unrecognized...
      default:
        msg.reply('You have entered and invalid command. Try `sherpa!` if you \
want to see a list of available commands.');
    }
  });

  await client.login(process.env.DISCORD_TOKEN);
};

module.exports = sherpabot;