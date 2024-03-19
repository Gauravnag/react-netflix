import React, { useEffect } from 'react';
import Header from './Header';
import useMovie from '../hooks/useMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useMovie();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse