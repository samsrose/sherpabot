# Sherpabot - Helping guide the way for Chingu Community Members

## Table of Contents

* [Overview](#overview)
* [Commands](#commands)
* [Dependencies](#dependencies)
* [Change Log](#change-log)
* [Contributing](#contributing)
* [Authors](#authors)
* [License](#license)

## Overview

Sherpa 'Bot is designed to help members of the Chingu Community in Discord
by displaying useful information, posting reminders, and performing routine
tasks on members' behalf.

## Commands

### `!sherpa meet new`

**_Description:_** 
Start the process of creating a new meeting with your team. This command will
display a URL to the 

**_Command:_** `!sherpa meet new`

**_Options:_**
N/a


### Environment Variables

Environment variables that control the operation of the app are defined in the
`.env` file in the application root. These variables and their usage are shown
in the table below. Adding or replacing entries in `.env` should be done through
the Chuseok application. `.env` should NOT be manually updated since some
entries are encrypted.

Environment variables maintained in the `.env` file are made available to the
application code via `process.env.<variable-name>`. For example, the
access token for the Discord bot is accessed in the code by referencing
`process.env.DISCORD_TOKEN`.

Remember that even though this keeps secure tokens like client id's and secrets
out of application code it does not make them secure.

| Environment Variable | Description       | Example Setting |
|:---------------------|:------------------|:----------------|
| DISCORD_TOKEN            | Discord Bot token | `DISCORD_TOKEN=A8H3RNL.35UAJD26JEOKJMNDAD0.UDNLADMEMCI2UCNH5UF48KDMB3DD5NW` |


## Running Sherpabot

To start Sherpabot issue the command `npm run webpack` in one terminal window
and `npm run dev` in another terminal window.

To run the Sherpa 'bot application open the URL `http://localhost:5000`.

## Dependencies

The Chuseok Bot extracts message traffic accessed through the Discord API
using the [Discord.JS](https://discord.js.org) package.

## Change Log

For more information see [Change Log](https://github.com/chingu-x/sherpabot/blob/development/docs/CHANGELOG.md)

## Contributing

See [Contributing](https://github.com/chingu-x/sherpabot/blob/development/docs/CONTRIBUTING.md)
and our [Collaborator Guide](https://github.com/chingu-x/sherpabot/blob/development/docs/COLLABORATOR_GUIDE.md).

## Authors

Developers on this project can be found on the [Contributors](https://github.com/chingu-x/sherpabot/graphs/contributors) page of this repo.

## License

[MIT](https://tldrlegal.com/license/mit-license)
