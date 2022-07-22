import React from "react";
import TeamTableRow from "./TeamTableRow";

function TeamTable({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Abbreviation</th>
          <th>City</th>
          <th>Conference</th>
          <th>Division</th>
          <th>Full name</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {items.map((team) => (
          <TeamTableRow item={team} key={team.id} />
        ))}
      </tbody>
    </table>
  );
}

export default TeamTable;
