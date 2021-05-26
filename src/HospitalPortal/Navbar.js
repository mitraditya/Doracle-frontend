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
                <Link to="/" className="navbar-brand"  style={{color: "white"}}>Doracle</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/hospital/displaypatients" className="nav-link" style={{color: "white"}}>All Data</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/hospital/addpatient" className="nav-link" style={{color: "white"}}>Create Patient</Link>
                        </li>
                        <Link to="http://localhost:3000"><button
                        onClick={this.onLogoutClick}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        style={{color: "white", justifyContent: "right"}}
                        >
                         Logout
                     </button></Link>
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
