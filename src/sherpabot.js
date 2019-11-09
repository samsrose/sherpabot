import Discord from 'discord.js';

function sherpabot() {
  const client = new Discord.Client();

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('message', msg => {
    if (msg.content === 'sherpa!help') {
      msg.reply(' __**Sherpa Commands:**__ \
        \n`sherpa!help` - List Sherpa commands \
        \n`sherpa!cmds` - List Sherpa commands \
        \n`sherpa!help chingu` - Display URL for Chingu documentation \
        \n`sherpa!help voyage` - Display URL for Voyage documentation \
        \n`sherpa!help pair`   - Display URL for Pair Projgramming documentation \
        \n`sherpa!help tech`   - Display URL for technical resources \
        \n`sherpa!help proj`   - Display URL for project resources \
      ');
    }
  });

  client.login(process.env.DISCORD_TOKEN);
}

export default sherpabot;