import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class RequirementsTableRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: "", requirement: "", info: "", time: ""}
    }

    componentDidMount(){
        fetch(`https://doracle-backend.herokuapp.com/hospital/${this.props.id}/pharmacy/${this.props.eachreq}`)
            .then((response) => response.json())
            .then((data1) => {
              const x=data1.date;
              const mod_date=x.substring(0,10);
              const mod_time=x.substring(12,19);
              this.setState({date: mod_date, requirement: data1.required_pharmacy, info: data1.info, time: mod_time})
            });
    }
    render(){
        return (
            <tr>
              <td>{this.state.date}</td>
              <td>{this.state.time}</td>
              <td>{this.state.requirement}</td>
              <td>{this.state.info}</td>
            </tr>
          );
    }
}

export default RequirementsTableRow;