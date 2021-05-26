import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { HloginUser } from "../../actions/authActions";
import classnames from "classnames";
import classes from '../../Login/Form.module.css';

class HospitalLogin extends Component {
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
      this.props.history.push("/hospital");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/hospital");
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

    this.props.HloginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
           

                <form style={{marginTop:'7em'}} onSubmit = {this.onSubmit} >
              {/* <div className="input-field col s12"> */}
                <label htmlFor="patientID" className={classes.formLabel}>Hospital ID</label><br></br>
                <input
                  onChange={this.onChange}
                  value={this.state.patientID}
                  error={errors.patientID}
                  id="patientID"
                  type="text"
                  className={classnames(classes.formInput, {
                    invalid: errors.patientID || errors.patientnotfound
                  })}
                />
                <br></br><br></br>
                <span className="red-text">
                  {errors.patientID}
                  {errors.patientnotfound}
                </span>
              {/* </div> */}
              {/* <div className="input-field col s12"> */}
              <label htmlFor="password" className={classes.formLabel}>Password</label>
                <br></br>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames(classes.formInput, {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
               <br></br><br></br>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              {/* </div> */}
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-warning"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

HospitalLogin.propTypes = {
  HloginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { HloginUser }
)(HospitalLogin);
