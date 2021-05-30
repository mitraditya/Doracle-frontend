import React, { Component } from 'react'
import Navbar from "./Navbar";
import classes from '../Login/Form.module.css';
import {Container, Row, Col} from 'react-bootstrap'

export class HospitalLanding extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className={classes.formouter}>
                    <Container fluid>
                    <Row>
                        <Col xs={4}><img src="hospg-min.png" alt="Hospital Vector" style={{width:'450px', height: '450px'}}/></Col>
                        <Col><h1 style={{fontSize: '90px'}}>Welcome to the Hospital Dashboard!</h1></Col>
                    </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default HospitalLanding
