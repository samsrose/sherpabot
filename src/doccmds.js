/**
 * Process a Sherpabot doc command
 * @param {Object} msg Discord message object containing the users request
 * @param {String} commandPrefix Sherpa command prefix (ex. `sherpa!`)
 * @param {String} command Sherpa command extracted from msg
 * @param {[String]} args Sherpa command arguments
 */
async function doccmds(msg, commandPrefix, command, args) {
  if (command !== 'doc') {
    msg.reply(`Sherpabot error: Doc command routing error (command=${command}). \
Please report this to a Chingu administrator.`);
    console.log(`Sherpabot error: Doc command routing error (command=${command})`);
    return;
  }

  if (args.length === 0) {
    msg.reply('https://docs.chingu.io');
  } else {

    switch(args[0]) {
      case 'chingu':
        msg.reply('https://chingu.docs.chingu.io');
        break;
      case 'voyage':
        msg.reply('https://voyage.docs.chingu.io');
        break;
      case 'pair':
        msg.reply('https://pairprog.docs.chingu.io');
        break;
      case 'tech':
        msg.reply('https://techres.docs.chingu.io');
        break;
      case 'proj':
        msg.reply('https://projres.docs.chingu.io');
        break;
      default:
        msg.reply(`I'm sorry, but I don't understand \`${args[0]}\`. Use \
  \`${commandPrefix}help doc\` to see a list of valid commands.`);
    }
  }

};

module.exports = doccmds;