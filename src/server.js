import compression from "compression";
// import dotenv from 'dotenv';
import express from 'express';
import sherpabot from "./sherpabot";

/*
const result = dotenv.config({ path: './.env' });
if (result.error) {
  throw result.error
}
*/

sherpabot();

const app = express();

app.use(compression());
app.use(express.static("public"));

const port = process.env.PORT || 5000;
app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`);
});