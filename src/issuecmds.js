/**
 * Process a Sherpabot issue command
 * @param {Object} msg Discord message object containing the users request
 * @param {String} commandPrefix Sherpa command prefix (ex. `sherpa!`)
 * @param {String} command Sherpa command extracted from msg
 * @param {[String]} args Sherpa command arguments
 */
async function issuecmds(msg, commandPrefix, command, args) {
  if (command !== 'issue') {
    msg.reply(`Sherpabot error: Issue command routing error \`(command=${command})\`. \
Please report this to a Chingu administrator.`);
    console.log(`Sherpabot error: Issue command routing error (command=${command})`);
    return;
  }

  msg.reply('https://chingu.docs.chingu.io/about/rptissue');

};

module.exports = issuecmds;