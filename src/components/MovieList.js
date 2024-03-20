import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({ title, noOfMovies }) => {
    return (
        <>
            <h1 className='text-3xl ml-4 text-white pb-3'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {
                        noOfMovies?.map(e => <MovieCard key={e.id} posterPath={e.poster_path} />)
                    }
                </div>
            </div>
        </>
    )
}

export default MovieList