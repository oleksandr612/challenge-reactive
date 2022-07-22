const express = require("express");
const cors = require("cors");
const axios = require("axios");

const server = express();

server.use(cors());

server.get("/api/teams", async (req, res) => {
  const { data } = await axios.get("https://www.balldontlie.io/api/v1/teams");
  res.send(data);
});

server.get("/api/weather/:city", async (req, res) => {
  console.log(req.params)
  const weatherApiUrl = new URL("http://api.weatherapi.com/v1/current.json");
  weatherApiUrl.searchParams.set("key", process.env.WEATHER_API_KEY);
  weatherApiUrl.searchParams.set("q", req.params.city);
  const { data: weather } = await axios.get(weatherApiUrl.href);
  res.send(weather);
});

server.listen(process.env.SERVER_PORT, () => {
  console.log(`Server started on http://localhost:${process.env.SERVER_PORT}`);
});
