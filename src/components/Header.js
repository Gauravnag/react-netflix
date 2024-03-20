import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addGpt } from '../utils/gptSlice';
import { SUPPORTED_LANG } from '../utils/constants';
import { addLanguage } from '../utils/langSlice';

const Header = () => {
  const dispatch = useDispatch();
  const gptBtnTextChange = useSelector(e => e.gpt.gptResult);

  const gptClick = () => {
    dispatch(addGpt());
  }

  const languageChange = (e) => {
    dispatch(addLanguage(e.target.value));
  }
  return (
    <>
      <div className='mx-10 py-5 bg-gradient-to-b from-black'>
        <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' className='w-40' />
      </div>
      {
        gptBtnTextChange &&
        <select className='absolute p-4 bg-green-500 text-white rounded-lg right-48 top-11' onChange={languageChange}>
          {
            SUPPORTED_LANG.map(e => <option key={e.identify} value={e.identify}>{e.name}</option>)
          }
        </select>
      }

      <button className='p-4 bg-blue-500 rounded-md absolute right-16 top-7' onClick={gptClick}> {gptBtnTextChange ? "Homepage" : "Search"} </button>
    </>
  )
}

export default Header