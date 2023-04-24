import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice'
import user from "../../images/user.png"
import "./Header.scss"
export default function Header() {
  const [term, setterm] = useState("");
  const dispatch=useDispatch();
  const submitHandler=(e)=>{
e.preventDefault();
console.log(term);
 dispatch(fetchAsyncMovies(term));
 dispatch(fetchAsyncShows(term));
 setterm("")
  }

  return (
    <div className="header">
    
        <div className="logo">
        <Link to="/" style={{color:"white"}}>MovieApp</Link></div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
<input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e)=>{setterm(e.target.value)} } />
<button type='submit'><i className="fa fa-search"></i></button>
        </form>
      </div>
      <div className="user-img">
        <img src={user} alt="Hello" /></div></div>
  )
}
