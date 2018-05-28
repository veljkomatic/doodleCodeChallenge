import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Chat from './Components/Chat/index';

const Router = () => (
  <BrowserRouter>
    <Route 
      path='/'
      component={Chat} />
  </BrowserRouter>
);

export default Router;