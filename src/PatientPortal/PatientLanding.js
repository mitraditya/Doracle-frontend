import React, { Component } from 'react'
import Navbar from "./Navbar";
import classes from '../Login/Form.module.css';

export class PatientLanding extends Component {    
    render() {
        return (
            <div>
                <Navbar/>
                <h1 className={classes.formouter}>Welcome to Patient Dashboard!</h1>
            </div>
        )
    }
}
export default PatientLanding