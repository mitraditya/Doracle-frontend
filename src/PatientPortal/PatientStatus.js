import React from 'react';
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import PatientDetailsTableRow from '../Portal/PatientDetailsTableRow';
import Navbar from "./Navbar";
import classes from '../Login/Form.module.css';

class PatientStatus extends React.Component {
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
                <Navbar/><br/>
                <div className={classes.formouter} style={{alignItems: 'normal', justifyContent: 'normal'}}><br/>
                    <h1>PATIENT LOG:</h1>
                    <Table responsive="md" striped bordered hover>
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Condition</th>
                        <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>{display}</tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default PatientStatus;