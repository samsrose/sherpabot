'use strict';

const dotenv = require('dotenv');
const express = require('express');
const sherpabot = require("./src/sherpabot");

const result = dotenv.config({ path: './.env' });
if (result.error) {
  throw result.error
}

sherpabot();

const app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})