import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
            <nav class="navbar navbar-expand-lg navbar-custom">
            <div class="container-fluid">
                <NavLink to="/patient" exact activeStyle={{fontWeight: "bold",color: "#104e8b"}} className="navbar-brand"  style={{color: "#104e8b"}}>Doracle</NavLink>
                <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NavLink to={"/patient/"+user.patientID} exact activeStyle={{fontWeight: "bold",color: "white"}} className="nav-link" style={{color: "white"}}>Profile</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to={"/patient/"+user.patientID+"/update"} exact activeStyle={{fontWeight: "bold",color: "white"}} className="nav-link" style={{color: "white"}}>Update</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to={"/patient/"+user.patientID+"/password-reset"} exact activeStyle={{fontWeight: "bold",color: "white"}} className="nav-link" style={{color: "white"}}>Reset Password</NavLink>
                    </li>
                    
                    <li class="nav-item">
                        <NavLink to={"/patient/"+user.patientID+"/status"} exact activeStyle={{fontWeight: "bold",color: "white"}} className="nav-link"  style={{color: "white"}}>Status</NavLink>
                    </li>
                    {/* <li class="nav-item">
                        <NavLink to="/" exact activeStyle={{fontWeight: "bold",color: "white"}} className="nav-link" style={{color: "white"}}>Report</NavLink>
                    </li> */}
                    <li class="nav-item">
                        <NavLink to={"/patient/"+user.patientID+"/requirements"} exact activeStyle={{fontWeight: "bold",color: "white"}} className="nav-link" style={{color: "white"}}>Pharmacy</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="http://localhost:3000"><button onClick={this.onLogoutClick} exact activeStyle={{fontWeight: "bold",color: "white"}} className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{color: "white", justifyContent: "right"}}>Logout</button></NavLink>
                    </li>
                </ul>
                </div>
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
