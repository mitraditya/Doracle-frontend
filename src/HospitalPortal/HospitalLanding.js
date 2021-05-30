import React, { Component } from 'react'
import Navbar from "./Navbar";
import classes from '../Login/Form.module.css';
import {Container, Row, Col} from 'react-bootstrap'

export class HospitalLanding extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Container>
                <Row>
                    <Col xs={4}><img src="hospg-min.png" alt="Hospital Vector"/></Col>
                    <Col><h1>Welcome to the Hospital Dashboard!</h1></Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default HospitalLanding
