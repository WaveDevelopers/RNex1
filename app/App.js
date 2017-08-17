import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux'; 
import Root from './root'
import Login from './login'
import Signup from './signup'

const App = () => (
    <Router>
      <Scene key="root"  hideNavBar={true}>
      <Scene key="root" component={Root}  hideNavBar={true}  />
      <Scene key="login" component={Login}  hideNavBar={true}  />
      <Scene key="signup" component={Signup}  hideNavBar={true}  /> 
      </Scene>
    </Router>
  );

  module.exports = App