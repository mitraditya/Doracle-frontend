import React from 'react';
import classes from './App.module.css';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import ChooseForm from './ChooseForm';
import PatientForm from './ChooseForm';

class App extends React.Component {

  render(){
    return (
      <Router>
        <div className={classes.App}>
          <Switch>
            <Route path="/" exact component={ChooseForm}/>
            <Route path="/patientlogin" exact component={PatientForm}/>
          </Switch>
        </div>
      </Router>
      );
  }
}

export default App;
