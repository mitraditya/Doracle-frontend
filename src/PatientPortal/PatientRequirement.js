import React from 'react';
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewRequirementsTableRow from '../Portal/ViewRequirementTableRow';
import Navbar from "./Navbar";
import classes from '../Login/Form.module.css';

class PatientRequirement extends React.Component {
    constructor(props){
        super(props);
        this.state = {patientrequirement: [], id: "", name: "", email: "", contact: "", patientid: ""}
    }

    componentDidMount(){
        fetch(`https://doracle-backend.herokuapp.com/hospital/show/${this.props.match.params.patientid}`)
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
                <Navbar/><br/>
                <div className={classes.formouter} style={{alignItems: 'normal', justifyContent: 'normal'}}><br/>
                    <h1>REQUIREMENT LOG:</h1>
                    <Table responsive="md" striped bordered hover>
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Requirement</th>
                        <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>{display}</tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default PatientRequirement;