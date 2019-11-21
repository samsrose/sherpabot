/**
 * Process a Sherpabot social command
 * @param {Object} msg Discord message object containing the users request
 * @param {String} commandPrefix Sherpa command prefix (ex. `sherpa!`)
 * @param {String} command Sherpa command extracted from msg
 * @param {[String]} args Sherpa command arguments
 */
async function socialcmds(msg, commandPrefix, command, args) {
  if (command !== 'social') {
    msg.reply(`Sherpabot error: Social command routing error \`(command=${command})\`. \
Please report this to a Chingu administrator.`);
    console.log(`Sherpabot error: Social command routing error (command=${command})`);
    return;
  }

  msg.reply('https://dev.to/chingu');
  msg.reply('https://medium.com/chingu');
  msg.reply('https://twitter.com/ChinguCollabs');

};

module.exports = socialcmds;