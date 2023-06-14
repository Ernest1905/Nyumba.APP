import React from "react";
import RentalInfo from "./Rentalinfo";

function Rentalslist({ rentals }) {
  const RentalInfos = rentals.map((rental) => (
    <RentalInfo key={rental.id} rental={rental} />
  ));

  return (
    <>
      <h3>RENTALS</h3>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>location</th>
            <th>owner</th>
            <th>No. of rooms</th>
            <th>Rent</th>
          </tr>
        </thead>
        <tbody>{RentalInfos}</tbody>
      </table>
    </>
  );
}

export default Rentalslist;
