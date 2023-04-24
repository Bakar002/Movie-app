import React from 'react';
import './App.scss'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from "./components/Home/Home"
import MovieDetail from "./components/Moviedetail/MovieDetail"
import PageNotFound from "./components/Pagenotfound/PageNotFound"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"


const App = () => {
  return (
    <div>
     <div className="app">
     <BrowserRouter>
     <Header/>
     <div className="container">
      <Routes>
         
            <Route path="/" element={<Home/>} />
        <Route path="/movie/:imdbID" element={<MovieDetail/>} />
        <Route path="*" element={<PageNotFound/>} />
        </Routes>
        </div>
        <Footer />
       
    </BrowserRouter>
    </div>
    </div>
  );
};
export default App;