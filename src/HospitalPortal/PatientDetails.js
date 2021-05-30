import React from 'react';
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import PatientDetailsTableRow from '../Portal/PatientDetailsTableRow';
import AddPatientStatus from './AddStatus';
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";
import classes from '../Login/Form.module.css';

class PatientDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {status: [], id: "", name: "", contact: "", patientid: "", email: ""}
    }

    componentDidMount(){
        fetch(`https://doracle-backend.herokuapp.com/hospital/show/${this.props.match.params.patientid}`)
        .then((response) => response.json())
        .then((data2) => { 
            const pname = data2.firstname + ' ' + data2.lastname;
            this.setState({ status: data2.curr_status, id: data2._id, name: pname, contact: data2.contact, patientid: data2.patientID, email: data2.email});
        });
    }
    render(){
        //console.log(this.state);
        const display = this.state.status.map((item,pos) => {
            return (
                <PatientDetailsTableRow key={pos} eachstatus={item} id={this.state.id} />
            )
        })
        return (
            <div>
                <Navbar/>
            <div className="card" style={{width: 300, height: 570,margin :"0px auto", float:"right"}}>
            <img class="card-img-top"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20190506125816/avt.png"
                    style={{width: 200, height: 170, marginLeft: "20%"}} alt="Card image cap"/>
        <div className="card-body">
			<h5 className="card-title" style={{color:"green"}}>
				PROFILE
			</h5>
			
			<p className="card-text" style={{color:"green"}}>
            Name - {this.state.name}
			</p>
			
			<p className="card-text" style={{color:"green"}}>
            Contact - {this.state.contact}
			</p>
            <p className="card-text" style={{color:"green"}}>
            Patient ID - {this.state.patientid}
			</p>
            <p className="card-text" style={{color:"green"}}>
            Email - {this.state.email}
			</p>
		</div>
        <div className="card-footer text-center">
						
			<button className="btn btn-primary btn-sm"
						id="left" style={{color:"white"}}>
 <Link to={"/hospital/"+this.state.patientid+"/requirements"} style={{backgroundColor: 'white', fontSize: "25px", padding: "5px"}}>+ Pharmacy</Link>

			</button>
			
		
		</div>
            </div>
			
                <div className={classes.formouter}> <br/>
                   
                    {/* <div style={{marginTop: 2}}>
                        <Link to={"/hospital/"+this.state.patientid+"/requirements"}  className={[classes.formsubmits, "btn btn-danger"].join(' ')} style={{backgroundColor: 'red'}}>Add Requirement</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;        
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="#" className={[classes.formsubmits, "btn btn-success"].join(' ')} style={{backgroundColor: 'green'}}>Previous Records</Link>
                    </div> */}
                    
                    <h3>PATIENT LOG:</h3><br/>
                    
                    <Table responsive="md" striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Condition</th>
                        <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>{display}</tbody>
                    </Table> <br/>
                    <AddPatientStatus id={this.state.id} />
                </div>
            </div>
        )
    }
}

export default PatientDetails;