import React from 'react';
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewRequirementsTableRow from './ViewRequirementTableRow';
import AddRequirements from './AddRequirements';

class Requirements extends React.Component {
    constructor(props){
        super(props);
        this.state = {patientrequirement: [], id: "", name: ""}
    }

    componentDidMount(){
        fetch(`http://localhost:4000/hospital/show/${this.props.match.params.patientid}`)
        .then((response) => response.json())
        .then((data3) => {
            const pname = data3.firstname + ' ' + data3.lastname;
            this.setState({ patientrequirement: data3.requirement, id: data3._id, name: pname});
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
                <h1>{this.state.name}</h1><br/>
                <h3>REQUIREMENT LOG:</h3>
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Requirement</th>
                    <th>Info</th>
                    </tr>
                </thead>
                <tbody>{display}</tbody>
                </Table> <br/>
                <AddRequirements id={this.state.id} />
            </div>
        )
    }
}

export default Requirements;