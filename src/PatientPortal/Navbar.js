import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import 'bootstrap/dist/css/bootstrap.min.css';


export class Navbar extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };

    render() {
        const { user } = this.props.auth;

        return (
            <nav className="navbar navber-dark bg-dark navbar-expand-lg">
                <Link to="/patient" className="navbar-brand"  style={{color: "white"}}>Doracle</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to={"/patient/"+user.patientID} className="nav-link" style={{color: "white"}}>Profile</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to={"/patient/"+user.patientID+"/update"} className="nav-link" style={{color: "white"}}>Update</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to={"/patient/"+user.patientID+"/password-reset"} className="nav-link" style={{color: "white"}}>Reset Password</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to={"/patient/"+user.patientID+"/status"} className="nav-link"  style={{color: "white"}}>Status</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="#" className="nav-link" style={{color: "white"}}>Report</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to={"/patient/"+user.patientID+"/requirements"} className="nav-link" style={{color: "white"}}>Pharmacy</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="#" className="nav-link" style={{color: "white"}}>Logged in : {user.patientID}</Link>
                        </li>
                        <Link to="http://localhost:3000"><button
                        onClick={this.onLogoutClick}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        style={{color: "white", justifyContent: "right"}}
                        >
                         Logout
                     </button></Link>
                       
                    </ul>

                </div>

            </nav>
        )
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Navbar);
