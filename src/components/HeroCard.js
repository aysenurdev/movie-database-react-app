import React, { useEffect, useState } from "react";
import {
  formatReleaseDate,
  generateTextExcerpt,
  getTrailerKey,
} from "../utilities/toolbelt";
import MoreInfo from "./MoreInfo";
import PlayTrailerButton from "./PlayTrailerButton";
import { getVideos, IMAGE_URL_BASE } from "../utilities/api";

const HeroCard = ({ hero }) => {
  const [trailerKey, setTrailerKey] = useState("");

  useEffect(() => {
    console.log("HeroCard Mounted");

    if (hero) {
      getVideos(hero.id)
        .then((data) => {
          setTrailerKey(getTrailerKey(data.results));
        })
        .catch((error) => {
          console.error("Error fetching videos for hero:", error);
        });
    }

    return () => {
      console.log("HeroCard Unmounted");
    };
  }, [hero]);

  return (
    <div className="hero-container">
      {hero ? (
        <>
        
          <img
  className="hero-card"
  src={`${IMAGE_URL_BASE}w1280/${hero.backdrop_path}?${Date.now()}`}
  alt={`${hero.original_title} large movie poster`}
/>

          <div className="hero-info-container">
            <h1 className="hero-title">
              {generateTextExcerpt(hero.original_title, 7)}
            </h1>
            <h2 className="hero-release-date">
              Release Date: {formatReleaseDate(hero.release_date)}
            </h2>
            <h3 className="hero-overview">
              {generateTextExcerpt(hero.overview, 25)}
            </h3>
            <div className="button-container">
              <PlayTrailerButton trailerKey={trailerKey} />
              <MoreInfo movieId={hero.id} />
            </div>
          </div>
        </>
      ) : (
        <div className="hero-loader"></div>
      )}
    </div>
  );
};

export default HeroCard;
