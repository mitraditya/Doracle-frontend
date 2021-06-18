import React from 'react';
import { NavLink } from 'react-router-dom';
import {Redirect} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../Login/Form.module.css';
import {Container, Row, Col} from 'react-bootstrap'

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
            <div>
                <nav class="navbar navbar-expand-lg navbar-custom">
                 <NavLink to="/" exact className="navbar-brand">Doracle</NavLink>
                </nav>
                 <div className={classes.formouter}>
                
            <Container fluid>
                    <Row>
                        <Col xs={8}><img src="1.jpg" alt="Hospital Vector" className={classes.xyz} /></Col>
                        <Col>
                        {/* <h1 style={{fontSize: '60px', marginTop: 60}}>Welcome to the Hospital Dashboard!</h1> */}
                        <h1 className={classes.heads} style={{fontSize: '25px'}}>"Welcome to Doracle <br></br>presented to you by Team Epsionage"</h1>
                        <br></br><br></br>
                        <Button className={classes.formsubmit} onClick={() => this.setState({ navigatePatientForm: true })}>Patient</Button> <br/>
                        <br></br>
                        <Button className={classes.formsubmit} onClick={() => this.setState({ navigateHospitalForm: true })}>Hospital</Button>
                        </Col>
                    </Row>
            </Container>
            </div>
            </div>
           
        )
    }
}

export default ChooseForm;