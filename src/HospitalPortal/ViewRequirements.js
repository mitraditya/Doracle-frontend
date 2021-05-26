import React from 'react';
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewRequirementsTableRow from '../Portal/ViewRequirementTableRow';
import AddRequirements from '../Portal/AddRequirements';
import Navbar from "./Navbar";
class Requirements extends React.Component {
    constructor(props){
        super(props);
        this.state = {patientrequirement: [], id: "", name: "", email: "", contact: "", patientid: ""}
    }

    componentDidMount(){
        fetch(`http://localhost:4000/hospital/show/${this.props.match.params.patientid}`)
        .then((response) => response.json())
        .then((data3) => {
            const pname = data3.firstname + ' ' + data3.lastname;
            this.setState({ patientrequirement: data3.requirement, id: data3._id, name: pname, email: data3.email, contact: data3.contact, patientid: data3.patientID});
        });
    }
    render(){
        //console.log(this.state);
        const display = this.state.patientrequirement.map((item,pos) => {
            return (
                <ViewRequirementsTableRow key={pos} eachreq={item} id={this.state.id} />
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
                <h3><strong>REQUIREMENT LOG:</strong></h3>
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Requirement</th>
                    <th>Info</th>
                    </tr>
                </thead>
                <tbody>{display}</tbody>
                </Table> <br/>
                <AddRequirements id={this.state.id} />
                </div>
            </div>
        )
    }
}

export default Requirements;