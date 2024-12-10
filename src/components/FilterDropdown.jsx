// src/components/FilterDropdown.js
import React from "react";

const FilterDropdown = ({ onFilterChange }) => {
  return (
    <div className="mb-4">
      <select
        onChange={(e) => onFilterChange(e.target.value)}
        className="w-full p-2 border rounded bg-black text-white"
      >
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="episode">Episodes</option>
      </select>
    </div>
  );
};

export default FilterDropdown;
