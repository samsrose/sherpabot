'use strict';

const dotenv = require('dotenv');
const app = require('./functions/server');
const sherpabot = require("./functions/sherpabot");

const result = dotenv.config({ path: './.env' });
if (result.error) {
  throw result.error
}

sherpabot();

app.listen(3000, () => console.log('Local app listening on port 3000!'));