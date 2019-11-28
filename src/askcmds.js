/**
 * Process a Sherpabot ask command
 * @param {Object} msg Discord message object containing the users request
 * @param {String} commandPrefix Sherpa command prefix (ex. `sherpa!`)
 * @param {String} command Sherpa command extracted from msg
 * @param {[String]} args Sherpa command arguments
 */
async function askcmds(msg, commandPrefix, command, args) {
  if (command !== 'ask') {
    msg.reply(`Sherpabot error: Ask command routing error \`(command=${command})\`. \
Please report this to a Chingu administrator.`);
    console.log(`Sherpabot error: Ask command routing error (command=${command})`);
    return;
  }

  msg.reply('https://chingu.docs.chingu.io/about/askhelp');

};

module.exports = askcmds;