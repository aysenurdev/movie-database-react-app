import React, { useEffect, useState } from 'react';
import { getNowPlaying, getPopularMovies, getTopRated, getUpcoming, getHeroMovies, getRecommendedMovies} from '../utilities/api';
import MoviesContainer from '../components/MoviesContainer';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import HeroCard from '../components/HeroCard';



const PageHome = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const[heroMovies, setHeroMovies]=useState([]) 
  const [activeSection, setActiveSection] = useState("popular");
  const [loadingHero, setLoadingHero] = useState(true);

  useEffect(() => {
    // Fetch popular movies
    getPopularMovies()
      .then((data) => {
        console.log(data);
        setPopularMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    // Fetch now playing movies
    getNowPlaying()
      .then((data) => {
        console.log(data);
        setNowPlayingMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    // Fetch top rated movies
      getTopRated()
      .then((data) =>{
        console.log(data)
        setTopRatedMovies(data.results);
      })
      .catch((error) =>{
        console.log(error);
      });

    // Fetch Upcoming movies
      getUpcoming()
      .then((data) =>{
        console.log(data)
        setUpcomingMovies(data.results);
      })
      .catch((error) =>{
        console.log(error);
        
      });

      getRecommendedMovies()
  .then((data) => {
    console.log('Recommended Movies Data:', data);

    if (data && data.results) {
      console.log('Setting Upcoming Movies:', data.results);
      setRecommendedMovies(data.results);
    } else {
      console.error('Unexpected data format. Revise your expectations!');
    }
  })
  .catch((error) => {
    console.error('API Call Error:', error);
    // Bring out the big guns – tackle the error like a champion!
    // You might want to consider a retry mechanism or alternative actions here.
  });


      // Fetch hero movies
      getHeroMovies()
      .then((data) => {
        console.log('Hero Movies API response data:', data);
        setHeroMovies(data);
        setLoadingHero(false); // Set loadingHero to false when data is available
      })
      .catch((error) => {
        console.log(error);
        setLoadingHero(false); // Set loadingHero to false on error
      });
    console.log('Hero Movies:', heroMovies);


  }, []);


  return (
    <main id="home">
      
      <HeroCard hero={heroMovies[0]} />
   

<div>
  <button onClick={() => setActiveSection('popular')} >Popular</button>
  <button onClick={() => setActiveSection('nowPlaying')} >Now Playing</button>
  <button onClick={() => setActiveSection('topRated')} >Top Rated</button>
  <button onClick={() => setActiveSection('upcoming')}>Upcoming</button>
</div>



       {activeSection === 'popular' && (
        <MoviesContainer title="Popular Movies" moviesData={popularMovies} />
      )}

      {activeSection === 'nowPlaying' && (
        <MoviesContainer title="Now Playing" moviesData={nowPlayingMovies} />
      )}

      {activeSection === 'topRated' && (
        <MoviesContainer title="Top Rated" moviesData={topRatedMovies} />
      )}

      {activeSection=== 'upcoming' && (
        <MoviesContainer title="Upcoming" moviesData={upcomingMovies}  />
      )}
      {activeSection === 'recommended' && (
        <MoviesContainer title="Recommended Movies" moviesData={recommendedMovies} />
      )}
       

      

    </main>
  );
};

export default PageHome;
