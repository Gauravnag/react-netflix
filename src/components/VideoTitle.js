import React from 'react'

const VideoTitle = ({movieName, overview}) => {
  return (
    <div className='m-10 w-1/4 bg-black/80 p-10 rounded-lg text-white mt-32'>
      <h1 className='text-3xl mb-10'>{movieName}</h1>
      <p className='mb-8'>{overview}</p>
      <button className='py-3 px-10 rounded-lg bg-white text-black hover:opacity-80'>Play</button>
      <button className='bg-white text-black py-3 px-10 rounded-lg mx-4 hover:opacity-80'>Read More</button>
    </div>
  )
}

export default VideoTitle
