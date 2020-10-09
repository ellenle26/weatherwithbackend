require("dotenv").config();
const axios = require("axios");

// const weatherController = {};
const apiKey = process.env.OPEN_WEATHER_KEY;

getWeather = async (req, res, next) => {
  try {
    const city = req.query.q;
    const lat = req.query.lat;
    const lon = req.query.lon;
    let url;
    if (city) {
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    }
    let response = await axios.get(url);
    console.log(response);
    res.send({ status: "success", data: response.data });
  } catch (err) {
    console.log(err);
    res.send({ status: "fail", data: err.message });
  }
};

module.exports = {
  getWeather: getWeather,
};
