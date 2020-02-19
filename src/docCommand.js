const docCmdArgs = [
  { argument: "chingu", reply: "https://chingu.docs.chingu.io" },
  { argument: "pair", reply: "https://pairprog.docs.chingu.io" },
  { argument: "proj", reply: "https://projres.docs.chingu.io" },
  { argument: "tech", reply: "https://techres.docs.chingu.io" },
  { argument: "voyage", reply: "https://voyage.docs.chingu.io" }
];

class docCommand {
  /**
   * Process a budbot doc command
   * @param {Object} msg Discord message object containing the users request
   * @param {String} commandPrefix Sherpa command prefix (ex. `sherpa!`)
   * @param {String} command Sherpa command extracted from msg
   * @param {[String]} args Sherpa command arguments
   */
  static async process(msg, commandPrefix, command, args) {
    if (command !== "doc") {
      msg.reply(`budbot error: Doc command routing error (command=${command}). \
  Please report this to a Chingu administrator.`);
      console.log(
        `budbot error: Doc command routing error (command=${command})`
      );
      return;
    }

    if (args.length === 0) {
      msg.reply("https://untethered.me/");
    } else {
      for (let i = 0; i < docCmdArgs.length; i++) {
        if (docCmdArgs[i].argument === args[0]) {
          msg.reply(docCmdArgs[i].reply);
          return;
        }
      }

      msg.reply(`I'm sorry, but I don't understand \`${args[0]}\`. Use \
  \`${commandPrefix}help doc\` to see a list of valid commands.`);
    }
  }

  /**
   * Retrieve a string containing help information for the 'doc`
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

module.exports = docCommand;
