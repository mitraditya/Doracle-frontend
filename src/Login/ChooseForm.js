import React from 'react';
import {Redirect} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import classes from '../Login/Form.module.css';

class ChooseForm extends React.Component {
    state = {
        navigatePatientForm: false,
        navigateHospitalForm: false
    }
    render(){
        console.log("Render called")
        if(this.state.navigatePatientForm){
            return <Redirect to="/patientlogin" push />
        }
        if(this.state.navigateHospitalForm){
            return <Redirect to="/hospitallogin" push />
        }
        return(
            <div className={classes.formouter}>
                <h1 className={classes.formh1}>LOGIN FOR:</h1>
                <Button className={classes.formsubmit} onClick={() => this.setState({ navigatePatientForm: true })}>Patient</Button> <br/>
                <Button className={classes.formsubmit} onClick={() => this.setState({ navigateHospitalForm: true })}>Hospital</Button>
            </div>
        )
    }
}

export default ChooseForm;