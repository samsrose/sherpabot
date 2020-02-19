class askCommand {
  /**
   * Process a budbot ask command
   * @param {Object} msg Discord message object containing the users request
   * @param {String} commandPrefix Sherpa command prefix (ex. `sherpa!`)
   * @param {String} command Sherpa command extracted from msg
   * @param {[String]} args Sherpa command arguments
   */
  static async process(msg, commandPrefix, command, args) {
    if (command !== "total") {
      msg.reply(`Error: Routing Error \`(command=${command})\`.`);
      console.log(`Error: Command Routing error (command=${command})`);
      return;
    }

    msg.reply("Here is some data: https://untethered.me/");
  }

  /**
   * Retrieve a string containing help information for the 'ask`
   * command
   * @static
   * @param {String} commandPrefix Command prefix
   * @returns Help text
   * @memberof askcmds
   */
  static help(commandPrefix) {
    return ` __**Commands:**__ \
\n\`${commandPrefix}total\` - Get total inv levels \
\n\`${commandPrefix}sauce\` - Get total sauce inv levels  \
\n\`${commandPrefix}diamond\`  - Get total diamond inv levels \
\n\`${commandPrefix}sativa\`  - Get total sativa in inventory \
\n\`${commandPrefix}indica\`  - Get total sativa in inventory  \
\n\`${commandPrefix}hybrid\`  - Get total sativa in inventory \
\n\`${commandPrefix}c02\`  - Get total c02 in inventory \
\n\`${commandPrefix}hte\`  - Get total hydrocarbon in inventory \
      `;
  }
}

module.exports = askCommand;
