import React from 'react';
import classes from '../Login/Form.module.css';
import Navbar from './Navbar'

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
            <div>
                <Navbar/>
                <div className={classes.formouter}>
                    <h1 className={classes.formh1}>ADD A NEW PATIENT:</h1>
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

                        <input className={classes.formsubmit} type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPatient;