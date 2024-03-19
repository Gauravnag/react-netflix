import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "playmovie",
    initialState: {
        nowPlayMovie: null,
        nowTrailerMovie: null,
        nowPopular: null,
    },
    reducers: {
        addNowMovies: (state, action) => {
            state.nowPlayMovie = action.payload
        },
        addPopularMovies: (state, action) => {
            state.nowPopular = action.payload
        },
        addMovieTrailer: (state, action) => {
            state.nowTrailerMovie = action.payload
        }
    }
})

export const {addNowMovies, addMovieTrailer, addPopularMovies} = movieSlice.actions;
export default movieSlice.reducer;