import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { fetchMovies } from "./services/api";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import MovieDetails from "./components/MovieDetails";
import FilterDropdown from "./components/FilterDropdown";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(""); // Search query
  const [filter, setFilter] = useState("movie"); // Default filter for "movie"
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch movies when query, page, or filter changes
  useEffect(() => {
    const getMovies = async () => {
      if (!query) return setQuery('');
      setLoading(true);
      setError("");
      try {
        const data = await fetchMovies(query, page, filter);
        if (data.Response === "False") {
          setError("NO FOUND");
          setMovies([]);
        } else {
          setError('');
          setMovies(data.Search);
        }
      } catch (error) {
        setError("Error fetching movies");
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [query, page, filter]);

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
    setPage(1); // Reset to the first page when a new search is made
  };

  const handlePageChange = (direction) => {
    setPage((prevPage) => (direction === "next" ? prevPage + 1 : prevPage - 1));
  };

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const resetMainPage = () => {
    setQuery("");  // Clear the search query
    setMovies([]);  // Clear the movie results
    setPage(1);     // Reset to the first page
    setError("");   // Clear the error message
  };

  return (
    <Router>

<div className="container mx-auto p-4">
        <SearchBar query={query} onSearch={handleSearch} />
        <FilterDropdown onFilterChange={handleFilterChange} />
        {error && <p className="text-red-500">{error}</p>}
        {loading && <p>Loading...</p>}
        <Routes>
          <Route
            path="/"
            element={<MovieGrid movies={movies} onPageChange={handlePageChange} />}
          />
          <Route path="/movie/:id" element={<MovieDetails resetMainPage={resetMainPage} />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
