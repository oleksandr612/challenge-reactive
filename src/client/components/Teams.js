import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTeamData } from "../actions/teams";
import TeamTable from "./TeamTable";

function Teams() {
  const { items, isFetching } = useSelector(({ teams }) => teams);
  const dispatch = useDispatch();

  const handleFetchClick = () => {
    dispatch(fetchTeamData());
  };

  return (
    <div>
      <button onClick={handleFetchClick}>
        Fetch basketBall teams
      </button>

      {isFetching && <h1>Fetching basketball teams....</h1>}
      {!isFetching && <TeamTable items={items} />}
    </div>
  );
};

export default Teams;
