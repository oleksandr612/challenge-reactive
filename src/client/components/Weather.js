import React, { useEffect, useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { apiFetchWeather } from "../axios";

function Weather() {
  const { city } = useMatch("/weather/:city").params;

  const [weather, setWeather] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    apiFetchWeather(city).then(({ data }) => {
      setWeather(data.weather);
    }).finally(() => { setIsFetching(false); });
  }, [city]);

  return (
    <>
      <Link to="/">Back</Link>
      {isFetching && <h1>Fetching weather info...</h1>}

      {!isFetching && (
        <>
          <h2>Location</h2>
          <dl>
            <dt>Country: </dt>
            <dd>{weather.location?.country}</dd>
            <dt>Region: </dt>
            <dd>{weather.location?.region}</dd>
          </dl>

          <h2>Weather</h2>
          <dl>
            <dt>Condition: </dt>
            <dd>{weather.current?.condition?.text}</dd>
            <dt>Temperature(Celsius/Farenheit): </dt>
            <dd>{weather.current?.temp_c}/{weather.current?.temp_f}</dd>
          </dl>
        </>
      )}
    </>
  );
}

export default Weather;
