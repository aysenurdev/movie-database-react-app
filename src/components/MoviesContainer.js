import React from "react";
import MovieCard from "./MovieCard";

function MoviesContainer({ title, moviesData }) {
  return (
    <>
      <h2>{title}</h2>
      {moviesData && moviesData.length > 0 && (
        <section className="movies-container">
          <div className="movies-flex-container">
            {moviesData.map((movieData) => (
              <MovieCard key={movieData.id} movieData={movieData} />
            ))}
          </div>
        </section>
      )}
     
    </>
  );
}

export default MoviesContainer;
