import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { addPopularMovies } from '../utils/movieSlice';
import { API_MOVIES } from '../utils/constants';

const usePopularMovie = () => {
    const dispatch = useDispatch();
    const nowPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_MOVIES);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        nowPopularMovies();
    }, [])
}
export default usePopularMovie;