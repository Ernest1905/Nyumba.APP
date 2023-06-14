import React from 'react';

function Search({ search, handleUpdateSearch }) {
  return (
    <div>
      <input 
        type="text" 
        placeholder="search nyumba" 
        value={search}
        onChange={(e) => handleUpdateSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
