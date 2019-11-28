# Sherpabot - Helping to guide the Chingu Community

## Table of Contents

* [Overview](#overview)
* [Commands](#commands)
* [Building & Running](#building--running)
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

Commands are entered in the Discord message input box as:

`sherpa!<command> <arguments>`

* [help](#help-command)
* [ask](#ask-command)
* [doc](#doc-command)
* [issue](#issue-command)
* [schedule](#schedule-command)
* [social](#social-command)
* [time](#time-command)

### Help Command

**_Description:_** 

Display a list of commands that are available to the user.

**_Command:_** 

`sherpa!`, `sherpa!cmds`, or `sherpa!help`

**_Arguments:_**

N/a

**_Example:_**

`sherpa!` will display:

> @johndoe,   Sherpa Commands:<br />
`sherpatest!`     - List Sherpa commands<br />
`sherpatest!help` - List Sherpa commands<br />
`sherpatest!help ask` - Access tips on how to ask for help<br />
`sherpatest!help doc` - Access the Chingu Handbook<br />
`sherpatest!help issue` - How to open an issue for the Chingu team<br />
`sherpatest!help sched|schedule` - Access the Chingu Schedule of Events<br />
`sherpatest!help social` - Display URLs for Chingu social media sites<br />
`sherpatest!help time` - Display the time<br />

___

### Ask Command

**_Description:_** 
Display guidelines and tips for how to ask a question in Discord to maximize
your results.

**_Command:_** 

`sherpa!ask`

**_Arguments:_**

N/a

**_Example:_**

`sherpa!ask will display:

> @johndoe, https://chingu.docs.chingu.io/about/askhelp
___

### Doc Command

**_Description:_** 

Display one or more URLs to the Chingu documentation you have requested.

**_Command:_** 

`sherpa!doc <arguments>`

**_Arguments:_**

Omitted - Display a link to the Chingu organization documentation<br />
`chingu` - Display a link to the Chingu organization documentation<br />
`voyage` - Display a link to the documentation defining the Voyage program<br />
`pair` - Display a link to the documentation defining the Pair Programming program<br />
`tech` - Display a link to Technical Resources<br />
`proj` - Display a link to Project Resources<br />

**_Example:_**

`sherpa!doc voyage` will display:

> @johndoe, https://chingu.docs.chingu.io/
___

### Issue Command

**_Description:_** 
Display information to help you open an issue for the Chingu team to look into.

**_Command:_** 

`sherpa!issue`

**_Arguments:_**

N/a

**_Example:_**

`sherpa!issue` will display:

> @johndoe, https://chingu.docs.chingu.io/about/rptissue
___

### Schedule Command

**_Description:_** 
Display a link to the Chingu Schedule of Events.

**_Command:_** 

`sherpa!sched`
`sherpa!schedule`

**_Arguments:_**

N/a

**_Example:_**

`sherpa!sched` or `sherpa!schedule` will display:

> @johndoe, https://chingu.docs.chingu.io/intro/schedule<br />

___

### Social Command

**_Description:_** 
Display a list of URL's for Chingu social media sites.

**_Command:_** 

`sherpa!social`

**_Arguments:_**

N/a

**_Example:_**

`sherpa!social` will display:

> @johndoe, https://dev.to/chingu<br />
@johndoe, https://medium.com/chingu<br />
@johndoe, https://twitter.com/ChinguCollabs<br />

___

### Time Command

**_Description:_** 
Display a the current time in another location.

**_Command:_** 

`sherpa!time in <city-name>`

**_Arguments:_**

_city-name_ the name of the city you who's current time you need to display

**_Example:_**

`sherpa!time in new york` will display:

> @johndoe, In New York it is currently 11:05:32 AM

`sherpa!time in london` will display:

> @johndoe, 3 locations were found.<br />
@johndoe, In London,  Canada  it is currently 11:05:45 AM<br />
@johndoe, In London,  United Kingdom  it is currently 4:05:45 PM<br />
@johndoe, In London, KY United States of America  it is currently 11:05:45 AM<br />

___

## Building & Running

* [Environment Variables](#environment-variables)
* [Building & Deploying Sherpabot](#building--deploying-sherpabot)
* [Starting Sherpabot](#starting-sherpabot)

### Environment Variables

Environment variables are defined in both the `.env` and `app.yaml` files in 
root of the project. Environment variables in `.env` are used when `NODE_ENV` 
is set to `development` and from `app.yaml` when `NODE_ENV` is `production`.  

Both the `.env` and `app.yaml` files have been added to `.gitignore` to keep
the Discord 'bot token confidential.

The specific variables and their usage are shown in the table below.

| Environment Variable | Description       | Example Setting |
|:---------------------|:------------------|:----------------|
| DISCORD_TOKEN        | Discord Bot token | `DISCORD_TOKEN=A8H3RNL.35UAJD26JEOKJMNDAD0.UDNLADMEMCI2UCNH5UF48KDMB3DD5NW` |
| COMMAND_PREFIX       | Sherpa command prefix | `sherpa!` |

### Building & Deploying Sherpabot

Building Sherpabot requires defining the 'bot in the Discord Developer site 
through the [Applications screen](https://discordapp.com/developers/applications/).
As part of this process a 'bot token will be generated which must be added to 
both the `.env` and `app.yaml` files as the value of the `DISCORD_TOKEN` 
variable.

Your `app.yaml` file, used by Gcloud, should contain:
```
runtime: nodejs10
service: sherpa

handlers:
  - url: /.*
    script: auto
    secure: always
    redirect_http_response_code: 301

automatic_scaling:
  max_instances: 1

env_variables:
  DISCORD_TOKEN: "<discord-bot-token>"
  COMMAND_PREFIX: "sherpa!"
```

Sherpabot currently runs on Gcloud. Deploying it requires the 
[Google Cloud SDK](https://cloud.google.com/appengine/docs/standard/nodejs/setting-up-environment_).
To deploy the app execute the following:
```
git checkout master
gcloud app deploy
```
from your terminal session. Once successfully deployed you should manually
terminate old versions from the GCloud App Engine 
[dashboard](https://console.cloud.google.com/appengine?project=chingu&duration=P1D&serviceId=sherpa).

### Starting Sherpabot

The following environment-specific commands may be used to start Sherpa:

  Production: `npm start`
  Development: `npm run startdev`

Note that for testing purposes you may find it useful to set the `COMMAND_PREFIX`
environment variable in the `.env` file to something different from what it is
set to in the `app.yaml` file. For example, if it's set to `sherpa!` in 
`app.yaml`, you can set it to `sherpatest!` in `.env` to allow testing using
a local development server without disrupting production users.

Sherpa also has a webpage containing its current status. When running locally
this can be accessed at the URL `http://localhost:8080`.

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
