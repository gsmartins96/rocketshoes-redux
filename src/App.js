import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from '../src/styles/global';

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}
