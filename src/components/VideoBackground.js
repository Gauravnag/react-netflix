import React, { useEffect, useState } from 'react';
import { API_MOVIES } from '../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import { addMovieTrailer } from '../utils/movieSlice';

const VideoBackground = ({ movieId }) => {
  // const [key, setKey] = useState(null);
  const dispatch = useDispatch();
  const trailerKey = useSelector(e => e.movie?.nowTrailerMovie);
  const bgTrailer = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_MOVIES);
    const json = await data.json();
    const filterData = json.results.filter(e => e.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // setKey(trailer.key);
    dispatch(addMovieTrailer(trailer));
  }
  useEffect(() => {
    bgTrailer();
  }, [])
  return (
    <div>
      <iframe className='w-[99vw] aspect-video absolute top-0 -z-10'
      // src={"https://www.youtube.com/embed/" + key}     using state
      src={"https://www.youtube.com/embed/" + trailerKey?.key + "?autoplay=1&mute=1" }
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground
