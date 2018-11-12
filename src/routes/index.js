import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginForm from '../components/Forms/LoginForm';
import SignUpForm from '../components/Forms/SignUpForm';

const Routes = () => (
  <Router>
    <Fragment>
      <Route path={'/login'} component={LoginForm}/>
      <Route path={'/signup'} component={SignUpForm}/>
    </Fragment>
  </Router>
);

export default Routes;