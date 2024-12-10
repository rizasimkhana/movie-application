import React, { useState } from "react";
import debounce from "lodash.debounce";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const debouncedSearch = debounce((term) => {
    if (term) {
      onSearch(term); // Trigger search only after a pause
    }
  }
  , 2000); // 2-second delay

  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="w-full p-2   bg-white   text-black font-bold hover:opacity-50 placeholder:text-black"
        placeholder="movies or series...."
      required/>
    </div>
  );
};

export default SearchBar;
