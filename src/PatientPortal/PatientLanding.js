import React, { Component } from 'react'
import Navbar from "./Navbar";
export class PatientLanding extends Component {
    
    render() {
       
        return (
            <div>
                <Navbar/>
                <h1 style={{marginTop: '2em'}}>Welcome to Patient Dashboard!</h1>
            </div>
        )
    }
}

export default PatientLanding