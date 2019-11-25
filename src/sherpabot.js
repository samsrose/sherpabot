const Discord = require('discord.js');
const doccmd = require('./doccmds');
const helpcmd = require('./helpcmds');
const issuecmd = require('./issuecmds');
const schedulecmd = require('./schedulecmds');
const socialcmd = require('./socialcmds');
const timecmd = require('./timecmds');

const commandList = [
  { command: '', func: helpcmd },
  { command: 'help', func: helpcmd },
  { command: 'doc', func: doccmd },
  { command: 'issue', func: issuecmd },
  { command: 'sched', func: schedulecmd },
  { command: 'schedule', func: schedulecmd },
  { command: 'social', func: socialcmd },
  { command: 'time', func: timecmd },
];

async function sherpabot() {
  const client = new Discord.Client();

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('message', async msg => {
    if(msg.author.bot) {
      return;
    }

    // Ignore messages that don't start with our prefix
    const commandPrefix = process.env.COMMAND_PREFIX;
    if(msg.content.toLowerCase().indexOf(commandPrefix) !== 0) {
      return;
    }
    
    // Separate command from its arguments
    const args = msg.content.slice(commandPrefix.length).trim().toLowerCase().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Validate and process commands
    const commandFunction = commandList.reduce((commandFunction, currentEntry) => {
      if (currentEntry.command === command) {
        return commandFunction = currentEntry.func;
      }
      return commandFunction;
    }, null);

    if (commandFunction !== null) {
      commandFunction(msg, commandPrefix, command, args);
    } else {
      msg.reply('You have entered and invalid command. Try `sherpa!` if you \
want to see a list of available commands.');
    }
  });

  await client.login(process.env.DISCORD_TOKEN);
};

module.exports = sherpabot;