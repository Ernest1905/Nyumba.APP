import React from "react";

function RentalInfo({ rental }) {
  const { id, location, owner, no_of_rooms, rent } = rental;

  return (
    <tr>
      <td>{id}</td>
      <td>{location}</td>
      <td>{owner}</td>
      <td>{no_of_rooms}</td>
      <td>{rent}</td>
    </tr>
  );
}

export default RentalInfo;
