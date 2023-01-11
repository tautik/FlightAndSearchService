const express = require("express");
const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  const app = express();
  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    //We can add city and destroy city here also but we will do it in
    //Service folder by importing :const CityRepository = requrie("./repository/city-repository");
    //at the top
  });
};
setupAndStartServer();
