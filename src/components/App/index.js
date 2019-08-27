/** @jsx jsx */

import React from 'react';
import { Global, jsx } from '@emotion/core';
import { globalCSS } from './styles';
import MovieContainer from '../MovieContainer';

export const App = () => (
  <React.Fragment>
    <Global styles={globalCSS} />
    <main data-testid="app">
      <MovieContainer  />
    </main>
  </React.Fragment>
);

export default App;
