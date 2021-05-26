import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayPatientsTableRow from './DisplayAllPatientsTableRow'
import Navbar from './Navbar'
class DisplayPatients extends React.Component {
  state = { AllPatients: [] };
  componentDidMount() {
    fetch("http://localhost:4000/hospital/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ AllPatients: data });
      });
  }

  render() {
    const display = this.state.AllPatients.map((item, pos) => {
      console.log(item);
      return (
          <DisplayPatientsTableRow key={pos} patientid={item.patientID} itemid={item.id} index={pos+1} name={item.firstname + " " + item.lastname} healthstatus={item.curr_status} contact={item.contact} />
      );
    });
    return (
      <div>
        <Navbar></Navbar>
        <div style={{marginTop:'5em'}} className="container">
        <h1>LIST OF PATIENTS:</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Name</th>
              <th>Health Status</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>{display}</tbody>
        </Table>
        </div>
      </div>
    );
  }
}

export default DisplayPatients;
