import React, { Component } from 'react'
import Navbar from "./Navbar";
import classes from '../Login/Form.module.css';
import {Container, Row, Col} from 'react-bootstrap'

export class HospitalLanding extends Component {
    render() {
        return (
            <div className={classes.full}>
                <Navbar/>
                <div className={classes.formouter}>
                    <Container fluid>
                    <Row>
                        <Col xs={6}><img className={classes.hospital} src="https://image.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg" alt="Hospital Vector"/></Col>
                        <Col><p className={classes.heading}>Welcome to the Hospital Dashboard!</p></Col>
                    </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default HospitalLanding
