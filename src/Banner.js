import React, { useState, useEffect } from 'react';
import "./Banner.css"

import axios from 'axios';
import requests from './Requests';

const Banner = () => {
    const [movie, setmovie] = useState({});

    const fetchMovie = async () => {
        try {
            const request = await axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=0ac5fa1a698c61ec77b8fc41bcfaac09')
            const data = request.data.results
            console.log(data);
            const random = Math.floor(Math.random() * data.length);
            setmovie(data[random])
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchMovie();
    }, []);

    function truncat(text, count) {
        return text.slice(0, count) + (text.length > count ? "..." : "");
    }
    return (
        <div className='Banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.poster_path}"
            )`,
          }}>
            <div class="hero-image" >
                <div class="hero-text">
                    <h1 className='movie_title'>{movie?.title}</h1>
                    <div className='banner_buttons'>
                        <button className='btn button_left' >Play</button>
                        <button className='btn button_right'>My list</button>
                    </div>
                    <p className='movie_para'>{movie?.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default Banner