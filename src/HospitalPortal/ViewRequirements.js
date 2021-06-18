import React from 'react';
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewRequirementsTableRow from '../Portal/ViewRequirementTableRow';
import AddRequirements from '../Portal/AddRequirements';
import Navbar from "./Navbar";
import classes from '../Login/Form.module.css';
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom';

class Requirements extends React.Component {
    constructor(props){
        super(props);
        this.state = {patientrequirement: [], id: "", name: "", email: "", contact: "", patientid: ""}
    }

    componentDidMount(){
        fetch(`https://doracle-backend.herokuapp.com/hospital/show/${this.props.match.params.patientid}`)
        .then((response) => response.json())
        .then((data3) => {
            const pname = data3.firstname + ' ' + data3.lastname;
            this.setState({ patientrequirement: data3.requirement, id: data3._id, name: pname, email: data3.email, contact: data3.contact, patientid: data3.patientID});
        });
    }
    render(){
        //console.log(this.state);
        const display = this.state.patientrequirement.map((item,pos) => {
            return (
                <ViewRequirementsTableRow key={pos} eachreq={item} id={this.state.id} />
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
    <Link to={"/hospital/"+this.state.patientid} style={{backgroundColor: 'white', fontSize: "25px", padding: "5px"}}>+Status</Link>
    
               </button>
                                   </div>
                                   </div>
                                   </div>
                                   </div>
                                   {/* <AddPatientStatus id={this.state.id} /> */}
                                   <AddRequirements id={this.state.id} />
   
                           </Col>
                           <Col>
                       <h3>REQUIREMENT LOG</h3> <br/>
                    <Table responsive="md" striped bordered hover variant="light">
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Requirement</th>
                        <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>{display}</tbody>
                    </Table> <br/>
                     
                           </Col>
                       </Row>
                   </Container>
                      
                   </div>
                {/* <div className={classes.formouter}> <br/>
                    <h5>Name - {this.state.name}</h5>
                    <h5>Contact - {this.state.contact}</h5>
                    <h5>Patient ID - {this.state.patientid}</h5>
                    <h5>Email - {this.state.email}</h5>

                    <h3 style={{marginTop: '2em'}}><strong>REQUIREMENT LOG:</strong></h3> <br/>
                    <Table responsive="md" striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Requirement</th>
                        <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>{display}</tbody>
                    </Table> <br/>
                    <AddRequirements id={this.state.id} />
                </div> */}
            </div>
        )
    }
}

export default Requirements;