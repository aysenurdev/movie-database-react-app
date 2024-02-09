import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecommendedMovies, searchMovies } from "../utilities/api";
import { FaSadCry } from "react-icons/fa";
import MoviesContainer from "../components/MoviesContainer";
import { APP_NAME } from "../utilities/constants";

const SearchPage = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [searchTimeoutId, setSearchTimeoutId] = useState(null);
  document.title = APP_NAME + " results for " + query;

  const formatQuery = (query) => {
    // split the query up
    const queryArray = query.split(" ");
    for (let i = 0; i < queryArray.length; i++) {
      queryArray[i] = queryArray[i].toLowerCase();
      queryArray[i] = queryArray[i][0].toUpperCase() + queryArray[i].substr(1);
    }

    return queryArray.join(" ");
  };

  useEffect(() => {
    if (!query) {
      // No need to proceed if the query is empty
      setMovies([]);
      setRecommendedMovies([]);
      return;
    }
  
    clearTimeout(searchTimeoutId);
  
    const timeoutId = setTimeout(() => {
      const uriQuery = encodeURIComponent(query.trim());
      console.log("Making API request for query:", uriQuery);

      searchMovies(uriQuery)
        .then((data) => {
          console.log("API response data:", data);

          const searchResults = data.searchResults || [];
          const recommendedMovies = data.recommendedMovies || [];

          if (searchResults.length > 0) {
            // Update state for search results
            setMovies(searchResults);

            if (recommendedMovies.length > 0) {
              // Update state for recommended movies
              setRecommendedMovies(recommendedMovies);
            } else {
              console.warn("No recommended movies found.");
              setRecommendedMovies([]);
            }
          } else {
            console.warn("No movies found in the search results.");
            setMovies([]);
            setRecommendedMovies([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching movies:", error);
          setMovies([]); // Handle error by setting an empty array
          setRecommendedMovies([]); // Also set recommended movies to an empty array
        });
    }, 500);

    setSearchTimeoutId(timeoutId);
  }, [query]);

  return (
    <main>
      <section className="search-results-section">
        <div className="search-text-container">
          
          <h1 className="searchQuery">{formatQuery(query)}</h1>
        </div>
        <MoviesContainer title="Search Results" moviesData={movies} />
      </section>
      <section className="recommended-section">
        <h2>Recommendations based on {movies[0]?.original_title}</h2>
        <MoviesContainer  moviesData={recommendedMovies} />
      </section>
    </main>
  );
};

export default SearchPage;
