import { REQUEST_TEAMS, RECEIVE_TEAMS, FETCH_TEAMS } from "../constants/team";

const team = (state = { items: [], isFetching: false }, action) => {
  switch (action.type) {
    case REQUEST_TEAMS:
      return { items: [], isFetching: true };
    case RECEIVE_TEAMS:
      return { items: action.data, isFetching: false };
    default:
      return state;
  }
};

export default team;
