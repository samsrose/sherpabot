'use strict';

const dotenv = require('dotenv');
const app = require('./src/server');
const sherpabot = require("./src/sherpabot");

const result = dotenv.config({ path: './.env' });
if (result.error) {
  throw result.error
}

sherpabot();

app.listen(3000, () => console.log('Local app listening on port 3000!'));