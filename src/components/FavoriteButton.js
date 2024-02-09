import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import watchlistIcon from "../images/watchlistIcon.svg"
import watchlistIconBg from "../images/watchlistIconBg.svg"

function FavoriteButton({ movieData }) {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(GlobalContext);
  const isFavorited = favorites.find((fav) => fav.id === movieData.id);

  const handleFavorite = (event) => {
    event.stopPropagation();
    if (isFavorited) {
      removeFromFavorites(movieData);
    } else {
      addToFavorites(movieData);
    }
  };

  return (
    <p onClick={handleFavorite} className={`favorite ${isFavorited ? 'favorited' : ''}`}>
      {isFavorited ? <img src={watchlistIconBg} alt="Star Icon" /> : <img src={watchlistIcon} alt="Star Background Icon" />}
    </p>
  );
}

export default FavoriteButton;
