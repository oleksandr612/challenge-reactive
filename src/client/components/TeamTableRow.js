import { Link } from "react-router-dom";

function TeamTableRow({ item }) {
  const { id, abbreviation, city, conference, division, full_name, name } =
    item;

  return (
    <tr>
      <td>{id}</td>
      <td>{abbreviation}</td>
      <td>{city}</td>
      <td>{conference}</td>
      <td>{division}</td>
      <td>{full_name}</td>
      <td>
        <Link to={`/weather/${abbreviation}`}>{name}</Link>
      </td>
    </tr>
  );
}

export default TeamTableRow;