import { REQUEST_TEAMS, RECEIVE_TEAMS, FETCH_TEAMS } from "../constants/team";
import { apiFetchBasketballTeams } from "../axios";

export const requestTeamData = () => {
  return { type: REQUEST_TEAMS };
};

export const receiveTeamData = (data) => {
  return { type: RECEIVE_TEAMS, data };
};

export const fetchTeamData = () => (dispatch) => {
  dispatch({ type: REQUEST_TEAMS });
  apiFetchBasketballTeams().then(({ data: { data } }) => {
    dispatch({ type: RECEIVE_TEAMS, data });
  });
};
