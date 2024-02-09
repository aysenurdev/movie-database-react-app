import { useState } from "react";

function formatReleaseDate(date) {
   

    const dateObject = new Date(date);
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return dateObject.toLocaleDateString("en-US", options);
}

function filterVideos(videoDataArray) {
  

    return videoDataArray.filter((videoData) => {
        return videoData.site === "YouTube" && videoData.type ==="Trailer";

    });
}
const sanitizeVideoData = (videos) => {
    return videos.filter(
      (video) =>
        video.backdrop_path !== null &&
        video.poster_path !== null &&
        video.release_date !== undefined
    );
  };
  const getTrailerKey = (videos) => {
    for (let index = 0; index < videos.length; index++) {
      const video = videos[index];
      if (video.site === "YouTube" && video.type === "Trailer") {
        return video.key;
      }
    }
  };

  const generateTextExcerpt = (text, maxWords) => {
    let textExcerpt = "";
  
    // Check if text is defined
    if (text !== undefined) {
      // turn the text into an array
      const textArray = text.split(" ");
  
      // slice the array, if it is larger than maxWords
      textExcerpt = text;
      if (textArray.length > maxWords) {
        const slicedArray = textArray.slice(0, maxWords - 1);
        textExcerpt = slicedArray.join(" ") + "...";
      }
    }
  
    return textExcerpt;
  };
  
  const generateRandomIndex = (arrayLength) => {
 
    const index = Math.floor(Math.random() * arrayLength);
    return index;
  };
  

export { formatReleaseDate, filterVideos, sanitizeVideoData, getTrailerKey, generateTextExcerpt, generateRandomIndex}


