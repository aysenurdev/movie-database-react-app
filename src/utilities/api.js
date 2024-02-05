const API_TOKEN = process.env.REACT_APP_TMDB_TOKEN;
const API_ENDPOINT = "https://api.themoviedb.org/3";
const IMAGE_URL_BASE = "https://image.tmdb.org/t/p/";

function getPopularMovies() {
    return fetch(`${API_ENDPOINT}/movie/popular`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        return response.json();
    })
    .catch((error) => {
        throw error;
    });
  


}

function getMovieById(movieId) {
   return fetch(`${API_ENDPOINT}/movie/${movieId}?append_to_response=videos`,{

    headers: {
        accept:"application/json",
        Authorization:`Bearer ${API_TOKEN}`,
    },
   })
      .then((response) => {
        if (!response.ok){
            throw new Error ("Network response was not OK");
        }
        return response.json();
      })
      .catch((error) =>{
        throw error;
      });
}



function getNowPlaying() {
    return fetch(`${API_ENDPOINT}/movie/now_playing`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        return response.json();
    })
    .catch((error) => {
        throw error;
    });
  
};

function getTopRated() {
    return fetch(`${API_ENDPOINT}/movie/top_rated`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        return response.json();
    })
    .catch((error) => {
        throw error;
    });
  
};

function getUpcoming() {
    return fetch(`${API_ENDPOINT}/movie/upcoming`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        return response.json();
    })
    .catch((error) => {
        throw error;
    });
  
};

function searchMovies(query) {
    return fetch(`${API_ENDPOINT}/search/movie?query=${query}`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`
      }
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((data) => {
        console.log("getRecommendedMovies - API response data:", data);
  
      if (data.results && data.results.length > 0) {
        // Extract the ID of the first movie
        const firstMovieId = data.results[0].id;
  
        // Fetch recommended movies based on the first movie
        return getRecommendedMovies(firstMovieId)
          .then((recommendedData) => {
            console.log("Recommended movies:", recommendedData);
            return {
              searchResults: data.results || [],
              recommendedMovies: recommendedData.results || []
            };
          });
      } else {
        // If no movies found in the search results
        console.warn("No movies found in the search results.");
        return {
          searchResults: [],
          recommendedMovies: []
        };
      }
    })
    .catch((error) => {
        console.error("getRecommendedMovies - Error fetching recommended movies:", error);

      // Handle the error appropriately, e.g., setMovies([]) or show an error message.
      throw error;
    });
  }
  




function getRecommendedMovies(movieId) {
   
    
    return fetch(`${API_ENDPOINT}/movie/${movieId}/recommendations`, {
    
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        return response.json();
    })
    .catch((error) => {
        throw error;
    });
  
};

function getVideos(movieId) {
    return fetch(`${API_ENDPOINT}/movie/${movieId}/videos`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        return response.json();
    })
    .catch((error) => {
        throw error;
    });
}


function getHeroMovies() {
    const timestamp = Date.now(); // Unique timestamp for cache-busting
    return fetch(`${API_ENDPOINT}/movie/now_playing?timestamp=${timestamp}`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Hero Movies API response data:", data);

        if (!data || !data.results || data.results.length === 0) {
            throw new Error("No hero movies found");
        }

        const randomIndex = Math.floor(Math.random() * data.results.length);
        const randomHero = data.results[randomIndex];

        console.log("Random Hero:", randomHero);

        return [randomHero];
    })
    .catch((error) => {
        console.error("Error fetching hero movies:", error);
        throw error;
    });
}

 
  


export { getPopularMovies, getMovieById, IMAGE_URL_BASE, getHeroMovies, getNowPlaying, getTopRated, getUpcoming, searchMovies, getRecommendedMovies, getVideos, API_TOKEN};


