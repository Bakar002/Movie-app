import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/Apis/MovieApi";
import { MovieApiKey } from "../../common/Apis/MovieApiKey"

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (term) => {
    

    const response = await MovieApi
        .get(`?apiKey=${MovieApiKey}&s=${term }&type=movie`)

    return (response.data);
})
export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async (term) => {

    const response = await MovieApi
        .get(`?apiKey=${MovieApiKey}&s=${term }&type=series`)

    return (response.data);
});
export const fetchAsyncShowsOrMoviesDetails = createAsyncThunk("movies/fetchAsyncShowsOrMoviesDetails", async (id) => {
   

    const response = await MovieApi
        .get(`?apiKey=${MovieApiKey}&i=${id}&Plot=full`)

    return (response.data);
})
const initialState = {
    movies: {},
    shows:{}, 
    selectedMovieOrShow:{},

};
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
      
        removeSelectedMovieOrShow:(state)=>{
            state.selectedMovieOrShow={};
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fullfilled");
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected")
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fullfilled");
            return { ...state, shows: payload };
        },
        [fetchAsyncShowsOrMoviesDetails.fulfilled]: (state, { payload }) => {
            console.log("Fullfilled");
            return { ...state, selectedMovieOrShow: payload };
        },
    }

});
export const {removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) =>
    state.movies.movies;
    export const getAllShows = (state) =>
    state.movies.shows;
    export const getAllData = (state) =>
    state.movies.selectedMovieOrShow;

export default movieSlice.reducer;