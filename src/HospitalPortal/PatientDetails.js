import React from 'react';
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import PatientDetailsTableRow from '../Portal/PatientDetailsTableRow';
import AddPatientStatus from './AddStatus';
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";

class PatientDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {status: [], id: "", name: "", contact: "", patientid: "", email: ""}
    }

    componentDidMount(){
        fetch(`http://localhost:4000/hospital/show/${this.props.match.params.patientid}`)
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
                <Navbar></Navbar>
                <div className="container">
                <h5>Name - {this.state.name}</h5>
                <h5>Contact - {this.state.contact}</h5>
                <h5>Patient ID - {this.state.patientid}</h5>
                <h5>Email - {this.state.email}</h5>
                <div>
            
                <Link to={"/hospital/"+this.state.patientid+"/requirements"} className="btn btn-danger">Add Requirement</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;        
                <Link to="#" className="btn btn-info">Reports</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="#" className="btn btn-success">Previous Records</Link>


                </div>
                
                <h3>PATIENT LOG:</h3>
                 
               <br></br>
               
                <Table striped bordered hover variant="dark">
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