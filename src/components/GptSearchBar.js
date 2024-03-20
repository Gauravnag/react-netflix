import React from 'react'
import lang from '../utils/language'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const gptLangValue = useSelector(e => e.supportLang.language);
  return (
    <div className='flex justify-center'>
    <div className='p-4 bg-gray-500 w-3/12r'>
        <input type='text' placeholder={lang[gptLangValue].placeholder} className='border-2 p-2' />
        <button className='bg-blue-500 rounded-md py-2 px-4 mx-2'> {lang[gptLangValue].search} </button>
    </div>
    </div>
  )
}

export default GptSearchBar