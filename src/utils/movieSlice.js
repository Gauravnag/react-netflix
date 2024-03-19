import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "playmovie",
    initialState: {
        nowPlayMovie: null,
        nowTrailerMovie: null,
    },
    reducers: {
        addNowMovies: (state, action) => {
            state.nowPlayMovie = action.payload
        },
        addMovieTrailer: (state, action) => {
            state.nowTrailerMovie = action.payload
        }
    }
})

export const {addNowMovies, addMovieTrailer} = movieSlice.actions;
export default movieSlice.reducer;