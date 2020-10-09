var express = require("express");
var router = express.Router();
const weatherController = require("../controller/weatherController");

/* GET home page. */
router.get("/", weatherController.getWeather);

module.exports = router;
