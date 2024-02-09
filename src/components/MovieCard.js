import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGE_URL_BASE } from '../utilities/api';
import FavoriteButton from './FavoriteButton'; // Import FavoriteButton component
import { formatReleaseDate } from '../utilities/toolbelt';

function MovieCard({ movieData, removeFromFavorites }) {
  const navigate = useNavigate();
  const imagePath = `${IMAGE_URL_BASE}/w185${movieData.poster_path}`;

  return (
    <div className="movie-card" onClick={() => navigate(`/movie/${movieData.id}`)}>
      <img src={imagePath} alt={movieData.title} className="movie-card-image" />
      <div className="movie-details">
        <h3 className="title">{movieData.title}</h3>
        <h4 className="release-date">{formatReleaseDate(movieData.release_date)}</h4>
        <h4 className="vote-average">{movieData.vote_average.toFixed(1)}</h4>
        {/* Move FavoriteButton here */}
        <FavoriteButton movieData={movieData} removeFromFavorites={removeFromFavorites} className="favorite-button" />
      </div>
    </div>
  );
}

export default MovieCard;
