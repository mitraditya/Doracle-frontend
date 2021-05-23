import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayPatientsTableRow from './DisplayAllPatientsTableRow'

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
      return (
          <DisplayPatientsTableRow key={pos} itemid={item.id} index={pos+1} name={item.firstname + " " + item.lastname} healthstatus={item.curr_status} contact={item.contact} />
      );
    });
    return (
      <div style={{marginTop:'10em'}}>
        <h1>List of Patients:</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Health Status</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>{display}</tbody>
        </Table>
      </div>
    );
  }
}

export default DisplayPatients;
