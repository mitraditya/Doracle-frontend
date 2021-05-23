import React from 'react';
import {Redirect} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

class PatientForm extends React.Component {
    render(){
        console.log("Render called")
        if(this.state.navigatePatientForm){
            return <Redirect to="/patientlogin" push />
        }
        if(this.state.navigateHospitalForm){
            return <Redirect to="/hospitallogin" push />
        }
        return(
            <div>
                <h3>Login for:</h3> <br/>
                <Button onClick={() => this.setState({ navigatePatientForm: true })} variant="primary">Patient</Button> <br/> <br/>
                <Button onClick={() => this.setState({ navigateHospitalForm: true })} variant="primary">Hospital</Button>
            </div>
        )
    }
}

export default PatientForm;