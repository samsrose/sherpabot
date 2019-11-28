
/**
 * Process a Sherpabot help command
 * @param {Object} msg Discord message object containing the users request
 * @param {String} commandPrefix Sherpa command prefix (ex. `sherpa!`)
 * @param {String} command Sherpa command extracted from msg
 * @param {[String]} args Sherpa command arguments
 */
async function helpcmds(msg, commandPrefix, command, args) {

  const helpCmdArgs = [
    { 
      argument: '', reply: ` __**Sherpa Commands:**__ \
        \n\`${commandPrefix}    \` - List Sherpa commands \
        \n\`${commandPrefix}help\` - List Sherpa commands \
        \n\`${commandPrefix}help ask\` - Access tips on how to get help \
        \n\`${commandPrefix}help doc\` - Access the Chingu Handbook \
        \n\`${commandPrefix}help issue\` - How to open an issue for the Chingu team \
        \n\`${commandPrefix}help sched|schedule\` - Access the Chingu Schedule of Events \
        \n\`${commandPrefix}help social\` - Display URLs for Chingu social media sites \
        \n\`${commandPrefix}help time\` - Display the time \
      `
    }, { 
      argument: 'ask', reply: ` __**Sherpa ask Commands:**__ \
        \n\`${commandPrefix}ask\` - Display tips on how to ask for help \
      `
    }, { 
      argument: 'doc', reply: ` __**Sherpa doc Commands:**__ \
        \n\`${commandPrefix}doc chingu\` - Access info about the Chingu organization \
        \n\`${commandPrefix}doc voyage\` - Access info about your Voyage  \
        \n\`${commandPrefix}doc pair\`   - Access info about Pair Programming sessions \
        \n\`${commandPrefix}doc tech\`   - Access Technical Resources \
        \n\`${commandPrefix}doc proj\`   - Access Project Resources \
      `
    }, { 
      argument: 'issue', reply: ` __**Sherpa issue Commands:**__ \
        \n\`${commandPrefix}issue\` - How to open an issue for the Chingu team \
      `
    }, { 
      argument: 'social', reply: ` __**Sherpa social Commands:**__ \
        \n\`${commandPrefix}social\` - Display URL's for Chingu social media sites \
      ` 
    }, { 
      argument: 'time', reply: ` __**Sherpa time Commands:**__ \
        \n\`${commandPrefix}time in <city-name>\` - Display current time in the specified city \
      ` 
    },
  ];

  if (command !== '' && command !== 'help') {
    msg.reply(`Sherpabot error: Help command routing error (command=${command}). \
Please report this to a Chingu administrator.`);
    console.log(`Sherpabot error: Help command routing error (command=${command})`);
    return;
  }

  let commandArg = args[0];
  if ( commandArg === undefined) {
    commandArg = '';
  }

  for(let i = 0; i < helpCmdArgs.length; i++) {
    if (helpCmdArgs[i].argument === commandArg) {
      msg.reply(helpCmdArgs[i].reply);
      return;
    }
  }

  msg.reply(`I'm sorry, but I don't understand \`${commandArg}\`. Use \
  \`${commandPrefix}help\` to see a list of valid commands.`);

};

module.exports = helpcmds;