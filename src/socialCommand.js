class socialCommand {
  /**
   * Interpret and process a budbot social command
   * @param {Object} msg Discord message object containing the users request
   * @param {String} commandPrefix Sherpa command prefix (ex. `sherpa!`)
   * @param {String} command Sherpa command extracted from msg
   * @param {[String]} args Sherpa command arguments
   * @memberof socialCommand
   */
  static async process(msg, commandPrefix, command, args) {
    if (command !== "social") {
      msg.reply(`budbot error: Social command routing error \`(command=${command})\`. \
Please report this to a Chingu administrator.`);
      console.log(
        `budbot error: Social command routing error (command=${command})`
      );
      return;
    }

    msg.reply("Dev.to --> https://untethered.me/\\");
    msg.reply("Medium --> https://untethered.me/\\");
    msg.reply("Twitter --> https://untethered.me/\\");
  }

  /**
   * Retrieve a string containing help information for the 'social`
   * command
   * @static
   * @param {String} commandPrefix Command prefix
   * @returns Help text
   * @memberof socialCommand
   */
  static help(commandPrefix) {
    return ` __**Sherpa social Commands:**__ \
\n\`${commandPrefix}social\` - Display URL's for Chingu social media sites \
      `;
  }
}

module.exports = socialCommand;
