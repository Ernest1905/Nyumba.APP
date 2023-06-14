import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Search from './searchbar';
import Rentalslist from './Rentals';

function Container() {
  const [search, setSearch] = useState('');
  const [rentals, setRentals] = useState([]);

  const baseUrl = `http://localhost:9292/rentals`;

  useEffect(() => {
    console.log('useEffect callback');
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => setRentals(data));
  }, [baseUrl]);
  

  const filterData = rentals.filter((data) => {
    if (search) {
      return data.description.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  });
  

  console.log('filtered:', filterData);

  function handleUpdateSearch(data) {
    console.log('data:', data);
    setSearch(data);
  }

  return (
    <>
      <Navbar />
      <Search search={search} handleUpdateSearch={handleUpdateSearch} />
      <Rentalslist rentals={filterData} />
    </>
  );
}

export default Container;
