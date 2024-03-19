import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { addNowMovies } from '../utils/movieSlice';
import { API_MOVIES } from '../utils/constants';

const useMovie = () => {
    const dispatch = useDispatch();
    const nowPlayMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_MOVIES);
        const json = await data.json();
        dispatch(addNowMovies(json.results));
    }

    useEffect(() => {
        nowPlayMovies();
    }, [])
}
export default useMovie;