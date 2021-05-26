import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class PatientDetailsTableRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: "", note: "", time: ""}
    }

    componentDidMount(){
        fetch(`http://localhost:4000/hospital/${this.props.id}/status/${this.props.eachstatus}`)
            .then((response) => response.json())
            .then((data1) => {
              const x=data1.date;
              const mod_date=x.substring(0,10);
              const mod_time=x.substring(12,19);
              this.setState({date: mod_date, note: data1.note, time: mod_time})
            });
    }
    render(){
        return (
            <tr>
              <td>{this.state.date}</td>
              <td>{this.state.time}</td>
              <td>{this.state.note}</td>
              <td>N/A</td>
            </tr>
          );
    }
}

export default PatientDetailsTableRow;