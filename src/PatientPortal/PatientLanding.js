import React, { Component } from 'react'
import Navbar from "./Navbar";
import classes from '../Login/Form.module.css';
import {Container, Row, Col} from 'react-bootstrap'

export class PatientLanding extends Component {    
    render() {
        return (
            <div className={classes.full}>
                <Navbar/>
                <div className={classes.formouter}>
                    <Container fluid>
                    <Row>
                        <Col xs={6}><img className={classes.hospital} src="https://image.freepik.com/free-vector/patient-lying-bed-during-intensive-therapy_74855-7774.jpg" alt="Hospital Vector"/></Col>
                        <Col><p className={classes.heading}>Welcome to the Patients Dashboard!</p></Col>
                    </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
export default PatientLanding