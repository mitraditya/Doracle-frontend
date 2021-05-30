import React from 'react';
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import PatientDetailsTableRow from '../Portal/PatientDetailsTableRow';
import AddPatientStatus from './AddStatus';
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";
import classes from '../Login/Form.module.css';

class PatientDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {status: [], id: "", name: "", contact: "", patientid: "", email: ""}
    }

    componentDidMount(){
        fetch(`https://doracle-backend.herokuapp.com/hospital/show/${this.props.match.params.patientid}`)
        .then((response) => response.json())
        .then((data2) => { 
            const pname = data2.firstname + ' ' + data2.lastname;
            this.setState({ status: data2.curr_status, id: data2._id, name: pname, contact: data2.contact, patientid: data2.patientID, email: data2.email});
        });
    }
    render(){
        //console.log(this.state);
        const display = this.state.status.map((item,pos) => {
            return (
                <PatientDetailsTableRow key={pos} eachstatus={item} id={this.state.id} />
            )
        })
        return (
            <div>
                <Navbar/>
                <div className={classes.formouter}> <br/>
                    <h5>Name - {this.state.name}</h5>
                    <h5>Contact - {this.state.contact}</h5>
                    <h5>Patient ID - {this.state.patientid}</h5>
                    <h5>Email - {this.state.email}</h5>

                    <div style={{marginTop: '2em'}}>
                        <Link to={"/hospital/"+this.state.patientid+"/requirements"}  className={[classes.formsubmit, "btn btn-danger"].join(' ')} style={{backgroundColor: 'red'}}>Add Requirement</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;        
                        <Link to="#" className={[classes.formsubmit, "btn btn-info"].join(' ')} style={{backgroundColor: 'blue'}}>Reports</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="#" className={[classes.formsubmit, "btn btn-success"].join(' ')} style={{backgroundColor: 'green'}}>Previous Records</Link>
                    </div>
                    
                    <h3 style={{marginTop: '2em'}}>PATIENT LOG:</h3><br/>
                    
                    <Table responsive="md" striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Condition</th>
                        <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>{display}</tbody>
                    </Table> <br/>
                    <AddPatientStatus id={this.state.id} />
                </div>
            </div>
        )
    }
}

export default PatientDetails;