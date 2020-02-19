"use strict";

const dotenv = require("dotenv");
const express = require("express");
const budbot = require("./src/budbot");

if (process.env.NODE_ENV !== "production") {
  const result = dotenv.config({ path: "./.env" });
  if (result.error) {
    throw result.error;
  }
}

budbot();

const app = express();
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<center>BudBot is <b style='color:green;text-decoration:underline;'>online</b>!</center>"
    )
    .end();
});

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`BudBot listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
