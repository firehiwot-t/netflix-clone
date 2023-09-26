import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from './axios';
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchurl,  isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(fetchurl);
            console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    } , [fetchurl]);
    //console.log(movies);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
        autoplay: 1,
        },
        };
        const handleClick = (movie) => {
            if (trailerUrl) {
            setTrailerUrl("");
            } else {
            movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
                .then((url) => {
                  const urlParams = new URLSearchParams(new URL(url).search); //a method to parse out the parameter(url) form the query string
                  setTrailerUrl(urlParams.get("v")); //v is the videoId found on the url
                })
                .catch((error) => console.log(error));
            }
            };
    return (
    <div className="row">
        <h1>{title}</h1>
        <div className="row__posters">
            {movies?.map((movie) =>(
                <img 
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row__poster ${ isLargeRow && "row__posterLarge"}`}
                //className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                    isLargeRow? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
                />
            ))}
        </div>
        <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
        
    </div>
  )
}

export default Row;