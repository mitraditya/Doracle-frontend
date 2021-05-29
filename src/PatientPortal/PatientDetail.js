import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import classes from '../Login/Form.module.css';

class PatientDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {id: "", name: "", contact: "", patientid: "", email: ""}
    }

    componentDidMount(){
        fetch(`https://doracle-backend.herokuapp.com/hospital/show/${this.props.match.params.patientid}`)
        .then((response) => response.json())
        .then((data2) => { 
            const pname = data2.firstname + ' ' + data2.lastname;
            this.setState({id: data2._id, name: pname, contact: data2.contact, patientid: data2.patientID, email: data2.email});
        });
    }
    render(){
        return (
            <div>
                <Navbar/>
                <div className={classes.formouter} >
                    <h5>Name - {this.state.name}</h5>
                    <h5>Contact - {this.state.contact}</h5>
                    <h5>Patient ID - {this.state.patientid}</h5>
                    <h5>Email - {this.state.email}</h5>
                </div>
            </div>
        )
    }
}

export default PatientDetail;