import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navber-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand"  style={{color: "white"}}>Doracle</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/hospital/displaypatients" className="nav-link" style={{color: "white"}}>All Data</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/hospital/addpatient" className="nav-link" style={{color: "white"}}>Create Patient</Link>
                        </li>
                      
                        {/* <li className="navbar-item">
                            <Link to="/" className="nav-link"  style={{color: "white"}}>Status</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/" className="nav-link" style={{color: "white"}}>Report</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/" className="nav-link" style={{color: "white"}}>Pharmacy</Link>
                        </li> */}

                       
                    </ul>

                </div>

            </nav>
        )
    }
}

export default Navbar
