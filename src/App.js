import React from 'react';
import classes from './App.module.css';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ChooseForm from './ChooseForm';
import PatientForm from './PatientForm';
import HospitalForm from './HospitalForm';

class App extends React.Component {

  render(){
    return (
      <Router>
        <div className={classes.App}>
          <Switch>
            <Route path="/" exact component={ChooseForm}/>
            <Route path="/patientlogin" exact component={PatientForm}/>
            <Route path="/hospitallogin" exact component={HospitalForm}/>
          </Switch>
        </div>
      </Router>
      );
  }
}

export default App;
