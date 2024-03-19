import React from 'react';
import { API_IMG } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    return (
        <div className='w-48 p-4'>
            <img src={API_IMG + posterPath} alt='images' />
        </div>
    )
}

export default MovieCard