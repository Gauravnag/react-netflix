import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movie = useSelector(e => e.movie?.nowPlayMovie);
  if (!movie) return;
  const { title, overview, id } = movie[0];
  return (
    <>
      <VideoTitle movieName={title} overview={overview} />
      <VideoBackground movieId={id} />
    </>
  )
}

export default MainContainer
