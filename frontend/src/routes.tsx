import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/cadastrar" component={SignUp} />
    </BrowserRouter>
  );
};

export default Router;
