import { createContext, useEffect, useState } from "react";

//create the context
export const GlobalContext = createContext();

//create the provider component
export function GlobalProvider ({children}) {
  //helper function to load from local storage
  function loadFromLocalStorage() {
    const localData = localStorage.getItem("favorites");
    return localData ? JSON.parse(localData) : [];
  }

//initial state
const [favorites, setFavorites] = useState(loadFromLocalStorage());

//helper funtion to add a favorite

function addToFavorites (favorite){
  const newFavorites = [...favorites, favorite];
  setFavorites(newFavorites);
}

//helper function to remove a favorite

function removeFromFavorites(favorite) {
  const newFavorites = favorites.filter((fav) => {
    return fav.id !== favorite.id;
  });
  setFavorites(newFavorites);
}

//use Effect that will run everytime something changes in the favorites state 

useEffect(() =>{
  //this code  will rerun everytime the state of favorites changes
  localStorage.setItem("favorites", JSON.stringify(favorites));
},[favorites]);

return (
  <GlobalContext.Provider
  value={{
    favorites: favorites,
    addToFavorites:addToFavorites,
    removeFromFavorites: removeFromFavorites,
  }}
  >
    {children}
  </GlobalContext.Provider>
);
}



export default GlobalProvider;
