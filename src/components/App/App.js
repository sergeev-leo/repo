import React from 'react';
import './main.sass'
import { Route } from 'react-router-dom';
import { HomePage } from '../HomePage/HomePage';
import { LoginPage } from '../LoginPage/LoginPage';
import {NavigationBar} from '../AppBar/AppBar';

const App = () =>
  <React.Fragment>
    <NavigationBar/>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
  </React.Fragment>;

export default App;

