var cityTimezones = require('city-timezones');

/**
 * Process a Sherpabot time command
 * @param {Object} msg Discord message object containing the users request
 * @param {String} commandPrefix Sherpa command prefix (ex. `sherpa!`)
 * @param {String} command Sherpa command extracted from msg
 * @param {[String]} args Sherpa command arguments
 */
async function timecmds(msg, commandPrefix, command, args) {
  if (command !== 'time') {
    msg.reply(`Sherpabot error: Time command routing error \`(command=${command})\`. \
Please report this to a Chingu administrator.`);
    console.log(`Sherpabot error: Time command routing error (command=${command})`);
    return;
  }

  // Determine the current time at the specified location
  if (args[0] === 'in') {
    const cityLookup = cityTimezones.lookupViaCity(args[1]);
    console.log(cityLookup)
    let date = new Date();
    let options = {
      timeZone: cityLookup[0].timezone,
      timeStyle: 'long'
    };
    msg.reply(`In ${cityLookup[0].city} it is currently ${date.toLocaleTimeString('en-US', options)}`);
    return;
  } 

  msg.reply(`I'm sorry, but I don't understand \`${commandArg}\`. Use \
\`${commandPrefix}help time\` to see a list of valid commands.`);

};

module.exports = timecmds;