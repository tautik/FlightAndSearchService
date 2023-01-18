const express = require("express");
const router = express.Router();

const v1ApiRoutes = require("./v1/index");
//if we get the route containing /v1 we will use v1ApiRoutes
router.use("/v1", v1ApiRoutes);
module.exports = router;
