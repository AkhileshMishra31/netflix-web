import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from './Requests';
import "./Row.css"
const base_url = "https://image.tmdb.org/t/p/original"

const Row = ({fetchurl,title,first}) => {
  const [movie, setmovie] = useState([]);

  const fetchMovie = async () => {
    try {
      const request = await axios.get(`https://api.themoviedb.org/3/${fetchurl}?api_key=0ac5fa1a698c61ec77b8fc41bcfaac09`)
      const data = request.data.results;
      setmovie(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <div className='Row'>
      <div className='heading'>
        <h1>{title}</h1>
      </div>
      <div className='content'>
        {
          movie?.map((item) => {
            return (
              <div className='image-slide'>
                <img className={first?'imgside':"img-put"} src={`${base_url}${item?.poster_path}`} />
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Row