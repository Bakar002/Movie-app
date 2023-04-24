import React from 'react'
import "./MovieDetail.scss"

import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { fetchAsyncShowsOrMoviesDetails,  removeSelectedMovieOrShow } from '../../features/movies/MovieSlice';
import { getAllData } from '../../features/movies/MovieSlice';
export default function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAllData);
  console.log(data)
  useEffect(() => {
    dispatch(fetchAsyncShowsOrMoviesDetails(imdbID));
return ()=>{
  dispatch(removeSelectedMovieOrShow())
}
  }, [dispatch, imdbID])
  return (
    <div className="movie-section">
        {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
      <>
      <div className="section-left">
        <div className="movie-title">
          {data.Title}
        </div>
        <div className="movie-rating">
          <span>
            IMDB Rating<i className="fa fa-star">:{data.imdbRating}</i>
          </span>
          <span>
            IMDB Votes<i className="fa fa-thumbs-up">:{data.imdbVotes}</i>
          </span>
          <span>
            Year <i className="fa fa-calender">:{data.Year}</i>
          </span>
          <span>
            Runtime <i className="fa fa-film">:{data.Runtime}</i>
          </span>
        </div>
        <div className="movie-plot">
          {data.Plot}
        </div>
        <div className="movie-info">
          <div>
            <span>Director:</span>
            <span>{data.Director}</span>
            
          </div>
          <div>
            <span>Stars:</span>
            <span>{data.Actors}</span>
            
          </div>
          <div>
            <span>Genres:</span>
            <span>{data.Genre}</span>
            
          </div>
          <div>
            <span>Languages:</span>
            <span>{data.Language}</span>
            
          </div>
          <div>
            <span>Awards :</span>
            <span>{data.Awards}</span>
            
          </div>
          
          
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
      </>  )}
    </div>
  )
}
