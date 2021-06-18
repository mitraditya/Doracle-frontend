import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import classes from '../Login/Form.module.css';
import {Link} from 'react-router-dom';

class PatientDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {id: "", name: "", contact: "", patientid: "", email: ""}
    }

    componentDidMount(){
        fetch(`https://doracle-backend.herokuapp.com/hospital/show/${this.props.match.params.patientid}`)
        .then((response) => response.json())
        .then((data2) => { 
            const pname = data2.firstname + ' ' + data2.lastname;
            this.setState({id: data2._id, name: pname, contact: data2.contact, patientid: data2.patientID, email: data2.email});
        });
    }
    render(){
        return (
            <div>
                <Navbar/>
                <div className={classes.formouter} >
                <div className={classes.containers}>
                                <div className={classes.cards}>
                                <img className={classes.profilephotos} src="https://images.generated.photos/QOmb_pWEg50AGT5iEw1SZgPX_W_3u_Kp3ZL_kEbRLxE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3MjcxMjAuanBn.jpg"/>
                                <div className={classes.textwrappers}>
                                <p className={classes.names}>{this.state.name}</p>
                                <p className={classes.roles}>{this.state.patientid}</p>
                                <div className={classes.contactwrappers}>
                                    <p className={classes.phones}>
                                         tel: {this.state.contact}
                                    </p>
                                    <p className={classes.websites}>
                                     {this.state.email}
                                 </p>
                                 {/* <button className="btn btn-primary btn-sm"
						 style={{color:"white"}}>
 <Link to={"/hospital/"+this.state.patientid+"/requirements"} style={{backgroundColor: 'white', fontSize: "25px", padding: "5px"}}>+ Pharmacy</Link>

			</button> */}
                                </div>
                                </div>
                                </div>
                                </div>
                    {/* <h5>Name - {this.state.name}</h5>
                    <h5>Contact - {this.state.contact}</h5>
                    <h5>Patient ID - {this.state.patientid}</h5>
                    <h5>Email - {this.state.email}</h5> */}
                </div>
            </div>
        )
    }
}

export default PatientDetail;