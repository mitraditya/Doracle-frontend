import React from 'react';
import classes from './App.module.css';

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";


import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ChooseForm from './Login/ChooseForm';
import PatientForm from './Login/PatientForm';
import HospitalForm from './Login/HospitalForm';
import DisplayPatients from './HospitalPortal/DisplayAllPatients';
import AddPatient from './HospitalPortal/AddPatient';
import PatientDetails from './HospitalPortal/PatientDetails';
import Requirements from './HospitalPortal/ViewRequirements';
import UpdateProfile from './PatientPortal/PatientProfile';
import AddPatientStatus from './HospitalPortal/AddStatus';
import HospitalLanding from "./HospitalPortal/HospitalLanding";
import PatientLanding from "./PatientPortal/PatientLanding";
import PatientDetail from "./PatientPortal/PatientDetail";
import PatientStatus from "./PatientPortal/PatientStatus";
import PatientRequirement from "./PatientPortal/PatientRequirement";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}


class App extends React.Component {

  render(){
    return (
      <Provider store={store}>
      <Router>
        
        <div className={classes.App}>
        
        <Route exact path="/" component={ChooseForm} />
           <Route exact path="/patientlogin" component={Login} />
           {/* <Route path="/hospitallogin" exact component={HospitalForm}/> */}
           <Switch>
             <PrivateRoute exact path="/patient" component={PatientLanding} />
             <PrivateRoute path="/patient/:patientid" exact component={PatientDetail}/>
            <PrivateRoute path="/patient/:patientid/status"exact component={PatientStatus}/>
            <PrivateRoute path="/patient/:patientid/requirements" exact component={PatientRequirement}/>
            <PrivateRoute path="/patient/:patientid/update" exact component={UpdateProfile}/>

           </Switch>
        
          
            <Switch>
            <Route path="/hospital" exact component={HospitalLanding}></Route>
            <Route path="/hospital/displaypatients" exact component={DisplayPatients}/>
            <Route path="/hospital/addpatient" exact component={AddPatient}/>
            <Route path="/hospital/:patientid" exact component={PatientDetails}/>
            <Route path="/hospital/:patientid/addStatus"exact component={AddPatientStatus}></Route>
            <Route path="/hospital/:patientid/requirements" exact component={Requirements}/>
                    
          </Switch>
         
        </div>
      </Router>
      </Provider>
      );
  }
}

export default App;









