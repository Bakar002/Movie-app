import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/MovieSlice'
import { getAllShows } from '../../features/movies/MovieSlice'
import Slider from "react-slick";
import { Settings } from "../../common/Setting";

import MovieCard from "../Moviecard/MovieCard"
import "./MovieListing.scss"

export default function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,renderShows = " ";
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => {
      return <MovieCard key={index} data={movie}></MovieCard>
    })



  ) : (<div className="moviesError">
    <h3>{movies.Error}
    </h3>
  </div>);
    renderShows = shows.Response === "True" ? (
      shows .Search.map((movie, index) => {
        return <MovieCard key={index} data={movie}></MovieCard>
      })
  
  
  
    ) : (<div className="moviesError">
      <h3>{movies.Error}
      </h3>
    </div>)


  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movies-container">
        <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Series</h2>
        <div className="movies-container">
        <Slider {...Settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  )
}
