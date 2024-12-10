// src/components/MovieGrid.js
import React from "react";
import { Link } from "react-router-dom";

const MovieGrid = ({ movies, onPageChange }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-red-600">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="bg-white p-4 rounded-lg shadow-md">
            <Link to={`/movie/${movie.imdbID}`}>
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
                alt={movie.Title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="mt-2 font-semibold">{movie.Title}</h3>
              <p>{movie.Year}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => onPageChange("prev")}
          className="bg-black text-white p-2 rounded"
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange("next")}
          className="bg-black text-white p-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieGrid;
