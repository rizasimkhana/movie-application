**Movie Search App using OMDB API in React & Tailwind CS**
***This is a simple Movie Search App built with React and styled using Tailwind CSS. It allows users to search for movies using the OMDB API. The app provides dynamic search functionality with previous search values, pagination, and error handling when no movies are found. It also provides a movie details page and a back-to-homepage button. ***
**Features:**
***Search Bar: Dynamic search bar with no search button. The search starts as you type.***
***Pagination: "Previous" and "Next" buttons to navigate through search results.***
***Error Handling: Displays "No Movies Found" error if no movies are found for the search term.***
***Movie Details: Displays details of the movie when clicked.***
***Navigation: A back-to-homepage button allows the user to return to the homepage.***
***Tailwind CSS: The app is styled using Tailwind CSS for responsive and modern design.***
***Components Breakdown***
1.App.jsx: The main component that holds the routing and overall state management.
2.SearchBar.jsx: Component that handles the movie search input and dynamic search.
3.MoviesList.jsx: Component that displays a list of movies returned from the search.
4.MovieDetails.jsx: Component that displays detailed information about a selected movie.
6.Filter.jsx: Component to allow users to filter movies by year or type.

**File Structure**

src/
├── components/
│   ├── SearchBar.jsx
│   ├── MoviesList.jsx
│   ├── MovieDetails.jsx
│   ├── FilterDropdown.jsx
├── App.jsx
├── index.jsx
├── tailwind.config.jsx
├── package.json

***Flowchart of the Application***
Here’s a simple flowchart that explains the logic flow of the app.
Start
  |
  V
Home Page
  |
  V
[User types in Search Bar]
  |
  V
If query length > 0 -> Fetch data from OMDB API
  |
  V
[Display Movies in List]
  |  
  V
If movie is selected -> Show Movie Details Page
  |
  V
Back to Home Page -> Return to Search with previous query
  |
  V
End
“Conclusion ---------- This movie search app provides a seamless experience with dynamic search, pagination, and movie details display. It leverages the OMDB API for fetching movie data and uses Tailwind CSS for styling, ensuring a modern and responsive design.”