import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import './hmain.css'

export class Navbar extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };

    render() {
        const { user } = this.props.auth;
        return (
            <nav class="navbar navbar-expand-lg navbar-custom">
            {/* <div class="container-fluid"> */}
                <NavLink to="/hospital" exact activeStyle={{fontWeight: "bold",color: "red"}} className="navbar-brand"  style={{color: "#1aaf75"}}>Doracle</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <NavLink to="/hospital/displaypatients" exact activeStyle={{fontWeight: "bold",color: "red"}} className="nav-link" style={{fontWeight: "bold",color: "#1aaf75"}}>All Data</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to="/hospital/addpatient" exact activeStyle={{fontWeight: "bold",color: "red"}} className="nav-link" style={{fontWeight: "bold",color: "#1aaf75"}}>Create Patient</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to={"/hospital/"+user.patientID+"/reset-password"} exact activeStyle={{fontWeight: "bold",color: "red"}} className="nav-link" style={{fontWeight: "bold",color: "#1aaf75"}}>Reset Password</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to="/hospital/uploaddata" exact activeStyle={{fontWeight: "bold",color: "red"}} className="nav-link" style={{fontWeight: "bold",color: "#1aaf75"}}>Upload Patient Database</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to="http://localhost:3000"><button onClick={this.onLogoutClick} exact activeStyle={{fontWeight: "bold",color: "red"}} className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{fontWeight: "bold",color: "#1aaf75", justifyContent: "right"}}>Logout</button></NavLink>
                    </li>
                </ul>
                </div>
            {/* </div> */}
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
