const Discord = require('discord.js');
const doccmds = require('./doccmds');
const helpcmds = require('./helpcmds');
const issuecmds = require('./issuecmds');
const socialcmds = require('./socialcmds');

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
      case '':
      case 'help':
        helpcmds(msg, commandPrefix, command, args);
        break;
      case 'doc':
        doccmds(msg, commandPrefix, command, args);
        break;
      case 'issue':
        issuecmds(msg, commandPrefix, command, args);
        break;
      case 'social':
        socialcmds(msg, commandPrefix, command, args);
        break;  
      default:
        msg.reply('You have entered and invalid command. Try `sherpa!` if you \
want to see a list of available commands.');
    }
  });

  await client.login(process.env.DISCORD_TOKEN);
};

module.exports = sherpabot;