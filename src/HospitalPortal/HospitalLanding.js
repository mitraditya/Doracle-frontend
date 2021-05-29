import React, { Component } from 'react'
import Navbar from "./Navbar";
import classes from '../Login/Form.module.css';

export class HospitalLanding extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1 className={classes.formouter}>Welcome to the Hospital Dashboard!</h1>
            </div>
        )
    }
}

export default HospitalLanding
