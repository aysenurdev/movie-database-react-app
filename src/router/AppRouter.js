import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageHome from '../pages/PageHome';
import PageSingleMovie from '../pages/PageSingleMovie';
import GlobalProvider from '../context/GlobalContext'
import About from '../pages/About';
import Favorites from '../pages/Favorites';
import SearchPage from '../pages/SearchPage';
import Header from '../components/Header';
import { APP_FOLDER_NAME } from "../utilities/constants";
import Footer from '../components/Footer';

import {
  ADD_FAVOURITE,
  DEL_FAVOURITE,
  TOGGLE_SETTING,
} from "../utilities/constants";

const AppRouter = () => {
  return ( 
  <BrowserRouter>
{/* //Header components */}
  <GlobalProvider>
    <Header />
<Routes>
   < Route path="/" element={<PageHome/>}/>
   < Route path="/movie/:id" element={<PageSingleMovie/>}/>
   < Route path="/about" element={<About/>}/>
   < Route path="/favorites" element={<Favorites/>}/>
   < Route path="/search/:query" element={<SearchPage/>}/>

  
</Routes>
<Footer />
</GlobalProvider>
{/* //Footer components */}
  </BrowserRouter>
  
  );
}

export default AppRouter;
