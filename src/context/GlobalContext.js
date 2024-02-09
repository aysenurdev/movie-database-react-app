import React, { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  function loadFromLocalStorage() {
    const localData = localStorage.getItem('favorites');
    return localData ? JSON.parse(localData) : [];
  }

  const [favorites, setFavorites] = useState(loadFromLocalStorage);

  function addToFavorites(favorite) {
    const newFavorites = [...favorites, favorite];
    setFavorites(newFavorites);
  }

  function removeFromFavorites(favorite) {
    const newFavorites = favorites.filter((fav) => fav.id !== favorite.id);
    setFavorites(newFavorites);
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <GlobalContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </GlobalContext.Provider>
  );
}




export default GlobalProvider;