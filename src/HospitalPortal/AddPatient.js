import React from 'react';
import classes from '../Login/Form.module.css';
import Navbar from './Navbar'
import {Container, Row, Col} from 'react-bootstrap'


class AddPatient extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            contact: "",
            email: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(this.state));
        fetch(`https://doracle-backend.herokuapp.com/hospital/add`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
            }).then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    alert(json);
                })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }
    render(){
        return(
            <div className={classes.full}>
                <Navbar/>
                {/* <div className={classes.l}>
                <img src="https://image.freepik.com/free-vector/detailed-doctors-nurses-collection-illustration_23-2148920309.jpg"></img> */}
                
                <div className={classes.formouter}>
                {/* <div className={classes.addbox}> */}
                <Container fluid>
                    <Row>
                    <Col xs={8}><img src="https://image.freepik.com/free-vector/hand-drawn-doctors-nurses_23-2148917433.jpg" alt="Hospital Vector" className={classes.xyz} /></Col>
                    <Col>
                    <div className={classes.adbox}>
                    <h1 className={classes.formh1}>Add New Patient:</h1>
                    <br></br>
                    <form onSubmit = {this.handleSubmit} >

                        <label className={classes.formlabel}>
                            <input className={classes.forminput} type="text" name="firstname" placeholder="First Name" value={this.state.firstname}  
                            onChange={this.handleChange} />
                            <span className={classes.formspan}>First Name</span>
                        </label>

                        <label className={classes.formlabel}>
                            <input className={classes.forminput} type="text" name="lastname" placeholder="Last Name" value={this.state.lastname} 
                            onChange={this.handleChange} />
                            <span className={classes.formspan}>Last Name</span>
                        </label>

                        <label className={classes.formlabel}>
                            <input className={classes.forminput} type="text" name="contact" placeholder="Contact Number" value={this.state.contact} 
                            onChange={this.handleChange} />
                            <span className={classes.formspan}>Contact Number</span>
                        </label>

                        <label className={classes.formlabel}>
                            <input className={classes.forminput} type="text" name="email" placeholder="Email" value={this.state.email} 
                            onChange={this.handleChange} />
                            <span className={classes.formspan}>Email</span>
                        </label>
                        <br></br>
                        <input className={classes.formsubmit} type="submit" value="Submit" />
                    </form>
                </div>
                    </Col>
                    </Row>
                </Container>
                </div>
                {/* </div> */}
                
                {/* </div> */}
                
            </div>
        )
    }
}

export default AddPatient;