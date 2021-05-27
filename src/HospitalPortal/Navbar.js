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
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Link to="/hospital" className="navbar-brand"  style={{color: "white"}}>Doracle</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link to="/hospital/displaypatients" className="nav-link" style={{color: "white"}}>All Data</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/hospital/addpatient" className="nav-link" style={{color: "white"}}>Create Patient</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/hospital/uploaddata" className="nav-link" style={{color: "white"}}>Upload Patient Database</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="http://localhost:3000"><button onClick={this.onLogoutClick} className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{color: "white", justifyContent: "right"}}>Logout</button></Link>
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
