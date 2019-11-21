
/**
 * Process a Sherpabot help command
 * @param {Object} msg Discord message object containing the users request
 * @param {String} commandPrefix Sherpa command prefix (ex. `sherpa!`)
 * @param {String} command Sherpa command extracted from msg
 * @param {[String]} args Sherpa command arguments
 */
async function helpcmds(msg, commandPrefix, command, args) {
  if (command !== '' && command !== 'cmds' && command !== 'help') {
    msg.reply(`Sherpabot error: Help command routing error (command=${command}). \
Please report this to a Chingu administrator.`);
    console.log(`Sherpabot error: Help command routing error (command=${command})`);
    return;
  }

  if (args.length === 0) {
    msg.reply(` __**Sherpa Commands:**__ \
      \n\`${commandPrefix}    \` - List Sherpa commands \
      \n\`${commandPrefix}help\` - List Sherpa commands \
      \n\`${commandPrefix}help doc\` - Display URL for documentation site \
      \n\`${commandPrefix}help issue\` - Display URL for opening an issue for the Chingu team \
      \n\`${commandPrefix}help social\` - Display URLs for Chingu social media sites \
    `);
  } else if (args[0] === 'doc' || args[0] === 'docs') {
    msg.reply(` __**Sherpa doc Commands:**__ \
      \n\`${commandPrefix}doc chingu\` - Display URL for Chingu documentation \
      \n\`${commandPrefix}doc voyage\` - Display URL for Voyage documentation \
      \n\`${commandPrefix}doc pair\`   - Display URL for Pair Projgramming documentation \
      \n\`${commandPrefix}doc tech\`   - Display URL for technical resources \
      \n\`${commandPrefix}doc proj\`   - Display URL for project resources \
    `);
  } else if (args[0] === 'issue') {
    msg.reply(` __**Sherpa issue Commands:**__ \
      \n\`${commandPrefix}issue\` - Display URL for opening an issue for the Chingu team \
    `);
  } else if (args[0] === 'social') {
    msg.reply(` __**Sherpa social Commands:**__ \
      \n\`${commandPrefix}social\` - Display URL's for Chingu social media sites \
    `);  
  } else {
    msg.reply(`I'm sorry, but I don't understand \`${args[0]}\`. Use \
\`${commandPrefix}help\` to see a list of valid commands.`);
  }

};

module.exports = helpcmds;