import React, { useEffect } from 'react';
import Header from './Header';
import useMovie from '../hooks/useMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovie from '../hooks/usePopularMovie';
import { useSelector } from 'react-redux';
import { GptSearch } from './GptSearch';

const Browse = () => {
  const gptValue = useSelector(e => e.gpt.gptResult);
  useMovie();
  usePopularMovie();

  return (
    <div>
      <Header />
      {
        gptValue ?
          <GptSearch /> :
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
      }

    </div>
  )
}

export default Browse