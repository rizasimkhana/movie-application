// src/components/MovieDetails.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { fetchMovieDetails } from "../services/api";

const MovieDetails = ({ resetMainPage }) => {
  const { id } = useParams(); // Extract movie ID from URL
  const navigate = useNavigate(); // Initialize useNavigate for back button
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(id); // Fetch movie details using the ID
        if (data.Response === "True") {
          setMovie(data); // Set movie data if successful
        } else {
          setError("Movie not found"); // Show error message if no movie is found
        }
      } catch (error) {
        setError("Error fetching movie details"); // Handle any error during API request
      } finally {
        setLoading(false); // Set loading state to false once the API call is complete
      }
    };

    getMovieDetails(); // Fetch movie details when the component mounts
  }, [id]); // Re-run effect when the movie ID changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleBackToHomepage = () => {
    resetMainPage();  // Reset the main page state when the user clicks back
    navigate("/");     // Navigate to the homepage
    
  };

  return (
    <div className="p-4">
      <button 
        onClick={handleBackToHomepage} // Call resetMainPage before navigating
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Back to Homepage
      </button>

      <div className="flex gap-4">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-48 h-72 object-cover"
        />
        <div className="text-white">
          <h1 className="text-3xl  font-bold">{movie.Title} ({movie.Year})</h1>
          <p className="mt-2 text-xl">{movie.Genre}</p>
          <p className="mt-4 text-sm">{movie.Plot}</p>
          <p className="mt-2 text-yellow-200">Rating: {movie.imdbRating}</p>
          <p className="mt-2">Cast: {movie.Actors}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
