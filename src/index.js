const express = require("express");
require("dotenv").config();

const setupAndStartServer = async () => {
  const app = express();
  const PORT = 3000; //-> put inside env for data hiding
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};
setupAndStartServer();
