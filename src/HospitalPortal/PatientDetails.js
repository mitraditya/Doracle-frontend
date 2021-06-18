import React from 'react';
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import PatientDetailsTableRow from '../Portal/PatientDetailsTableRow';
import AddPatientStatus from './AddStatus';
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";
import {Container, Row, Col} from 'react-bootstrap'

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
                <div className={classes.formouter}> <br/>
                   
                <Container fluid>
                    <Row>
                        <Col xs={5}>
                            {/* <img className={classes.hospital} src="https://image.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg" alt="Hospital Vector"/> */}
                            <div className={classes.container}>
                                <div className={classes.card}>
                                <img className={classes.profilephoto} src="https://images.generated.photos/QOmb_pWEg50AGT5iEw1SZgPX_W_3u_Kp3ZL_kEbRLxE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3MjcxMjAuanBn.jpg"/>
                                <div className={classes.textwrapper}>
                                <p className={classes.name}>{this.state.name}</p>
                                <p className={classes.role}>{this.state.patientid}</p>
                                <div className={classes.contactwrapper}>
                                    <p className={classes.phone}>
                                         tel: {this.state.contact}
                                    </p>
                                    <p className={classes.website}>
                                     {this.state.email}
                                 </p>
                                 <button className="btn btn-primary btn-sm"
						 style={{color:"white"}}>
 <Link to={"/hospital/"+this.state.patientid+"/requirements"} style={{backgroundColor: 'white', fontSize: "25px", padding: "5px"}}>+ Pharmacy</Link>

			</button>
                                </div>
                                </div>
                                </div>
                                </div>
                                <AddPatientStatus id={this.state.id} />

                        </Col>
                        <Col>
                         
                    <h3 className={classes.headss}>Status Log:</h3><br/>
                    
                    <Table className={classes.tablu} responsive="md" striped bordered hover variant="light">
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
                  
                        </Col>
                    </Row>
                </Container>
                   
                </div>
            </div>
        )
    }
}

export default PatientDetails;