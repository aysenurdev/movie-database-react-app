import {
    ADD_FAVOURITE,
    DEL_FAVOURITE,
    TOGGLE_SETTING,
  } from "./utilities/constants";
  
  const AppReducer = (state, action) => {

  
    const saveToLocalStorage = (localStorageItem, data) => {
      localStorage.setItem(localStorageItem, JSON.stringify(data));
    };
  
    let updatedFavorites;
    switch (action.type) {
      case ADD_FAVOURITE:
        updatedFavorites = [...state.favorites, action.payload];
        saveToLocalStorage("favorites", updatedFavorites);
        return {
          ...state,
          favorites: updatedFavorites,
        };
        break;
  
      case DEL_FAVOURITE:
        updatedFavorites = state.favorites.filter(
          (favourite) => favourite.id !== action.payload.id
        );
        saveToLocalStorage("favorites", updatedFavorites);
        return { ...state, favorites: updatedFavorites };
        break;
  
      case TOGGLE_SETTING:
        const updatedSettings = {
          ...state.settings,
          [action.payload]: !state.settings[action.payload],
        };
        saveToLocalStorage("settings", updatedSettings);
        return { ...state, settings: updatedSettings };
        break;
  
      default:
        return state;
        break;
    }
  };
  
  export default AppReducer;
  