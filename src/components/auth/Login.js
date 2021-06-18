import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import classes from '../../Login/Form.module.css';
import { NavLink } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      patientID: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/patient");
    }
  }

  componentWillReceiveProps(nextProps) {
    
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/patient");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      patientID: this.state.patientID,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className={classes.full}>
         <nav class="navbar navbar-expand-lg navbar-custom">
          <NavLink to="/" exact className="navbar-brand">Doracle</NavLink>
         </nav>
         {/* <div className={classes.lefts}>
        <img className={classes.imgs} src="https://image.freepik.com/free-vector/flat-hand-drawn-doctor-injecting-vaccine-patient_23-2148869091.jpg" />
        </div> */}
         <div className={classes.loginboxs}>
        <div className={classes.formouter}>
        <div>
          <h1 className={classes.formh1}>Patient Login</h1>
          <br></br><br></br>
          <div>
              <form onSubmit = {this.onSubmit} >
                <label htmlFor="patientID" className={classes.formlabel}>
                  <input
                    onChange={this.onChange}
                    value={this.state.patientID}
                    error={errors.patientID}
                    id="patientID"
                    type="text"
                    placeholder="Patient ID"
                    className={classnames(classes.forminput, {
                      invalid: errors.patientID || errors.patientnotfound
                    })}
                  />
                  <span className={classes.formspan}>Patient ID</span>
                </label>
                <br></br>
                <label htmlFor="password" className={classes.formlabel}>
                  <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      placeholder="Password"
                      className={classnames(classes.forminput, {
                        invalid: errors.password || errors.passwordincorrect
                      })}
                    />
                    <span className={classes.formspan}>Password</span>
                </label>
                <br></br>
                <span className="red-text">
                  {errors.patientID}
                  {errors.patientnotfound}
                </span>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
                <div>
                  <button type="submit" className={classes.formsubmit}>Login</button>
                </div>
              </form>
          </div>
        </div>
      </div>
      </div>
      </div>
      
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
