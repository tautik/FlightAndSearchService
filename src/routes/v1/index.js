const express = require("express");
const CityController = require("../../controllers/city-controller");

const router = express.Router();
//if we encounter /city in routes we POST req CityController.create
router.post("/city", CityController.create);

module.exports = router;
