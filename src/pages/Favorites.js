import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MovieCard from '../components/MovieCard';
import { APP_NAME } from "../utilities/constants";
import { getRecommendedMovies } from '../utilities/api';
import { generateRandomIndex, sanitizeVideoData } from '../utilities/toolbelt';

function Favorites() {
  document.title = `${APP_NAME} Favorites`;

  const { favorites } = useContext(GlobalContext);
  const [recommendedMovies, setRecommendedMovies] = useState(null);

  useEffect(() => {
    if (favorites.length > 0) {
      const recommendedMovieSeed = favorites[generateRandomIndex(favorites.length)];
      getRecommendedMovies(recommendedMovieSeed.id)
        .then((data) => {
          const movies = sanitizeVideoData(data.results);
          setRecommendedMovies({ recommendedMovieSeed, movies });
        })
        .catch((error) => console.log(error));
    }
  }, [favorites]);

  return (
    <div className='favorite-page'>
      <h1>My Favorites</h1>
      <div className="movies-container-2">
        {favorites.length === 0 ? (
          <p>Sorry, you have no favorited movies. Return to the home page to add a favorite movie.</p>
        ) : (
          <div className="movies-flex-container">
            {favorites.map((movie) => (
              <MovieCard key={movie.id} movieData={movie} />
            ))}
          </div>
        )}

        <h2>Recommended Movies</h2>
        <p>Based on your favorites, here are some recommendations:</p>
        {recommendedMovies && (
          <div className="movies-flex-container">
            {recommendedMovies.movies.map((movie) => (
              <MovieCard key={movie.id} movieData={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
