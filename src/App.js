import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './components/Styles/GlobalStyle';
import theme from './components/Styles/theme';

import Posts from './components/Pages/Posts';

const App = () => (
  <ThemeProvider theme={ theme } >
    <GlobalStyle />
    <Posts />
  </ThemeProvider>
);

export default App;
