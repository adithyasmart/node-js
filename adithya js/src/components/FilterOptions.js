import React from 'react';
import './FilterOptions.css';

const FilterOptions = ({ setFilter }) => {
  return (
    <div className="filter-options">
      <label htmlFor="status-filter">Filter by Status:</label>
      <select id="status-filter" onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default FilterOptions;
