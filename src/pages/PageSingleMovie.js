import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../utilities/api";
import { filterVideos, formatReleaseDate } from "../utilities/toolbelt";
import FavoriteButton from "../components/FavoriteButton";

function PageSingleMovie() {
    const params = useParams();
    const id = params.id;
    const [movieData, setMovieData] = useState();
    const [movieVideos, setMovieVideos] = useState([]);

    useEffect(() => {
        getMovieById(id)
            .then((data) => {
                const youtubeTrailerVideos = filterVideos(data.videos.results);
                setMovieData(data);
                setMovieVideos(youtubeTrailerVideos);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    return (
        <div className="single-movie-page">
            {movieData && (
                <>
                    
                    <div className="single-movie-content">
                        <div className="single-poster">
                            <img className="backside"   src={`https://image.tmdb.org/t/p/w1280/${movieData.poster_path}`} alt={movieData.title} />
                        </div>

                
                        <div className="single-movie-info">
                        <img  className="poster-front"   src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt={movieData.title} />
                           
                        <div className="single-movie-header">
                        <h1>{movieData.title}</h1>

                        <p>{formatReleaseDate(movieData.release_date)}</p>
                            
                        
                        <p>{movieData.overview}</p>
                        <FavoriteButton movieData={movieData} />
                        {movieVideos.length > 0 && (
                                <iframe
                                    width="350"
                                    height="200"
                                    title={movieVideos[0].name}
                                    src={`https://www.youtube.com/embed/${movieVideos[0].key}`}
                                ></iframe>
                            )}
                        </div>  
                        </div>

                    </div>
                </>
            )}
           
        </div>
    );
}

export default PageSingleMovie;
