import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Login from '../src/Login';
import Friends from '../src/Friends';
import PrivateRoute from '../src/PrivateRoute';

function App() {
  return (
   <BrowserRouter>
    <Link to='/login'>Login</Link>
    <Link to='/friends'>Friends</Link>
    <Switch>
      <PrivateRoute exact path='/friends' component={Friends} />
      <Route path='/login' component={Login}/>
      <Route component={Login}/>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
