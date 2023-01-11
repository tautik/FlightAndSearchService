const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  const app = express();
  // parse application/json
  app.use(bodyParser.json());
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
  });
};
setupAndStartServer();
