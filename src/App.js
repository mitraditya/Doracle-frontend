import React from 'react';
import classes from './App.module.css';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ChooseForm from './Login/ChooseForm';
import PatientForm from './Login/PatientForm';
import HospitalForm from './Login/HospitalForm';
import DisplayPatients from './Hospital/DisplayAllPatients';
import AddPatient from './Hospital/AddPatient';
//import NavbarHospital from './Hospital/NavbarHospital';

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
          {/* <NavbarHospital/> */}
          <Switch>
            <Route path="/hospital/displaypatients" exact component={DisplayPatients}/>
            <Route path="/hospital/addpatient" exact component={AddPatient}/>
          </Switch>
        </div>
      </Router>
      );
  }
}

export default App;
