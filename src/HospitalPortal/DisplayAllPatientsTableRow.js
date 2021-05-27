import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

class DisplayPatientsTableRow extends React.Component {
    constructor(props){
        super(props);
        this.state={status:""}
    }
    
  componentDidMount() {
          if (
            
            this.props.healthstatus === null ||
            this.props.healthstatus === undefined ||
            this.props.healthstatus.length === 0
          ){
              this.setState({status: "Not updated yet"})
          }
          else {
            fetch(
              `http://localhost:4000/hospital/${this.props.itemid}/status/${
                this.props.healthstatus[this.props.healthstatus.length - 1]
              }`
            )
              .then((response) => response.json())
              .then((data1) => {
                this.setState({status: data1.note})
              });
          }
  }

  render() {
    if(this.props.role)
    return null;
      //console.log(this.state.status);
      return (
        <tr>
          <td><Link to={"/hospital/"+this.props.patientid}  style={{color: "white"}}>{this.props.patientid}</Link></td>
          <td>{this.props.name}</td>
          <td>{this.state.status}</td>
          <td>{this.props.contact}</td>
        </tr>
      );
  }
}

export default DisplayPatientsTableRow;