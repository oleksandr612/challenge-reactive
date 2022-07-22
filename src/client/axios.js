import Axios from "axios";

export const apiFetchBasketballTeams = () => Axios.get("/api/teams");

export const apiFetchWeather = (city) => Axios.get(`/api/weather/${city}`);
