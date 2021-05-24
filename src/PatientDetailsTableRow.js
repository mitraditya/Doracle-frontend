import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class PatientDetailsTableRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: "", note: ""}
    }

    componentDidMount(){
        fetch(`http://localhost:4000/hospital/${this.props.id}/status/${this.props.eachstatus}`)
            .then((response) => response.json())
            .then((data1) => {
              this.setState({date: data1.date, note: data1.note})
            });
    }
    render(){
        return (
            <tr>
              <td>{this.state.date}</td>
              <td>{this.state.note}</td>
              <td>N/A</td>
            </tr>
          );
    }
}

export default PatientDetailsTableRow;