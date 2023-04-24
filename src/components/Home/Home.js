import React, { useEffect } from 'react';
import MovieListing from "../Movielisting/MovieListing";
import {useDispatch} from "react-redux";
import {fetchAsyncMovies, fetchAsyncShows} from '../../features/movies/MovieSlice';
const Home=()=>{

  const dispatch=useDispatch();
  const MovieText="Harry";
  const ShowText="Sacred"
  useEffect(()=>{
  
   dispatch(fetchAsyncMovies(MovieText));
   dispatch(fetchAsyncShows(ShowText ))

  
  },[dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing></MovieListing>
    </div>



  );
}
export default Home;