import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../utilities/api";
import { filterVideos, formatReleaseDate } from "../utilities/toolbelt";
import FavoriteButton from "../components/FavoriteButton";

function PageSingleMovie(){
    const params = useParams();
    const id = params.id;
    const [movieData, setMovieData] = useState();
    const [movieVideos, setMovieVideos] = useState([]);

    useEffect (() =>{
        getMovieById(id)
        .then ((data) =>{
            //could clean up and filter the videos first, to throw away everything thats not a Youtube Trailer?
            const youtubeTrailerVideos = filterVideos(data.videos.results);
            setMovieData(data);
            setMovieVideos (youtubeTrailerVideos);
        })

        .catch((error) =>{
            alert(error);
        });

    },[id]);

    console.log(movieData);

    return (
        <div className="movie-page">
            {movieData && (
                <>
                <h1>{movieData.title}</h1>
                <div>
                    <h2>{formatReleaseDate(movieData.release_date)}</h2>
                    <FavoriteButton movieData={movieData} />
                </div>
                <p>{movieData.overview}</p>
                <div className="movie-videos">

                    {movieVideos.length > 0 && (
                        <iframe
                        width="640"
                        height="480"
                        title={movieVideos[0].name}
                        src={`https://www.youtube.com/embed/${movieVideos[0].key}`}

                        ></iframe>

                    )}
                </div>
                </>
            ) }
            {/* //could add a loading spinner here, to display while movieData is falsey */}
        </div>
    );
   }

   export default PageSingleMovie;
