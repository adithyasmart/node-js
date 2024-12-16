import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTasks }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    searchTasks(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by Title or Description"
      value={searchTerm}
      onChange={handleSearch}
      className="search-bar"
    />
  );
};

export default SearchBar;
