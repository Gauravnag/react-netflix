import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_IMG } from '../utils/constants'

export const GptSearch = () => {
    return (
        <>
            <div className='absolute bg-cover bg-center -z-10 bg-blue-400'>
                <img src={BG_IMG} />
            </div>
            <GptSearchBar />
        </>
    )
}
