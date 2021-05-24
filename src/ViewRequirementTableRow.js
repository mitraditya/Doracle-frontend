import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class RequirementsTableRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: "", requirement: "", info: ""}
    }

    componentDidMount(){
        fetch(`http://localhost:4000/hospital/${this.props.id}/pharmacy/${this.props.eachreq}`)
            .then((response) => response.json())
            .then((data1) => {
              this.setState({date: data1.date, requirement: data1.required_pharmacy, info: data1.info})
            });
    }
    render(){
        return (
            <tr>
              <td>{this.state.date}</td>
              <td>{this.state.requirement}</td>
              <td>{this.state.info}</td>
            </tr>
          );
    }
}

export default RequirementsTableRow;