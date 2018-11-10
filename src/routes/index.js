import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginForm from '../components/Forms/LoginForm';

const Routes = () => (
  <Router>
    <Route path={'/login'} component={LoginForm}/>
  </Router>
);

export default Routes;