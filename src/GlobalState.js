import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {
  ADD_FAVOURITE,
  DEL_FAVOURITE,
  TOGGLE_SETTING,
} from "./utilities/constants";

// Initial State
const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  settings: JSON.parse(localStorage.getItem("settings")) || {
    nicCageMode: false,
    adultSearch: false
  },
};


const GlobalContext = createContext(initialState);

// Provider Component

const GlobalProvider = (props) => {

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addFavourite = (newFavourite) => {
    dispatch({
      type: ADD_FAVOURITE,
      payload: newFavourite,
    });
  };

  const delFavourite = (favouriteToRemove) => {
    dispatch({
      type: DEL_FAVOURITE,
      payload: favouriteToRemove,
    });
  };

  const toggleSetting = (setting) => {
    dispatch({
      type: TOGGLE_SETTING,
      payload: setting,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        settings: state.settings,
        toggleSetting,
        favorites: state.favorites,
        addFavourite,
        delFavourite,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
