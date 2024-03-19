import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector(e => e.movie);
  return (
    <div className='bg-black'>
      <MovieList title={"Now Player"} noOfMovies={movies.nowPlayMovie} />
      <MovieList title={"Popular"} noOfMovies={movies.nowPopular} />
    </div>
  )
}

export default SecondaryContainer
