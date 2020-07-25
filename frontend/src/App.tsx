import React from 'react';
import GlobalStyle from './styles/global';
import Router from './routes';

const App: React.FC = () => {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
};

export default App;
