import React, { Component } from 'react'
import Navbar from "./Navbar";
export class HospitalLanding extends Component {
    render() {
        return (
            
            <div>
                <Navbar/>
                <h1 style={{marginTop:'2em'}}>Welcome to the Dashboard!</h1>
            </div>
            
        )
    }
}

export default HospitalLanding
