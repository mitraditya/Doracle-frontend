import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayPatientsTableRow from './DisplayAllPatientsTableRow'
import Navbar from './Navbar'
import classes from '../Login/Form.module.css';

class DisplayPatients extends React.Component {
  state = { AllPatients: [] };
  componentDidMount() {
    fetch("https://doracle-backend.herokuapp.com/hospital/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ AllPatients: data });
      });
  }

  render() {
    console.log(this.state.AllPatients)
    const display = this.state.AllPatients.map((item, pos) => {
      console.log(item);
      return (
          <DisplayPatientsTableRow role={item.role} key={pos} patientid={item.patientID} itemid={item.id} index={pos+1} name={item.firstname + " " + item.lastname} healthstatus={item.curr_status} contact={item.contact} />
      );
    });
    return (
      <div>
        <Navbar/>
        <div className={classes.formouter} style={{alignItems: 'normal', justifyContent: 'normal'}}><br/>
        <h1>LIST OF PATIENTS:</h1>
        <Table responsive="md" striped bordered hover variant="dark">
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
