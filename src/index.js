const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

const ApiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  //app.use->The app. use() method mounts or puts the specified middleware functions at the specified path.
  //("/api") if we encounter this then execute the router passed by ApiRoutes
  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
  });
};
setupAndStartServer();
