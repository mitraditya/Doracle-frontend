import React from 'react';
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import PatientDetailsTableRow from './PatientDetailsTableRow';
import AddPatientStatus from './AddStatus';

class PatientDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {status: [], id: "", name: ""}
    }

    componentDidMount(){
        fetch(`http://localhost:4000/hospital/show/${this.props.match.params.patientid}`)
        .then((response) => response.json())
        .then((data2) => {
            const pname = data2.firstname + ' ' + data2.lastname;
            this.setState({ status: data2.curr_status, id: data2._id, name: pname});
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
                <h1>{this.state.name}</h1><br/>
                <h3>PATIENT LOG:</h3>
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Condition</th>
                    <th>Notes</th>
                    </tr>
                </thead>
                <tbody>{display}</tbody>
                </Table> <br/>
                <AddPatientStatus id={this.state.id} />
            </div>
        )
    }
}

export default PatientDetails;