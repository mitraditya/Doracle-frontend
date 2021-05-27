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
        fetch(`http://localhost:4000/hospital/add`, {
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
                <h1 style={{marginTop:'2em'}}>ADD A NEW PATIENT:</h1>
                <form style={{marginTop:'2em'}} onSubmit = {this.handleSubmit} >
                    <label className={classes.formLabel}>First Name</label><br/>
                    <input className={classes.formInput} type="text" name="firstname"  value={this.state.firstname}  
                    onChange={this.handleChange} /> <br/><br/>

                    <label className={classes.formLabel}>Last Name</label><br/>
                    <input className={classes.formInput} type="text" name="lastname" value= {this.state.lastname} 
                    onChange={this.handleChange} /> <br/><br/>

                    <label className={classes.formLabel}>Contact Number</label><br/>
                    <input className={classes.formInput} type="text" name="contact" value= {this.state.contact} 
                    onChange={this.handleChange} /> <br/><br/>

                    <label className={classes.formLabel}>Email</label><br/>
                    <input className={classes.formInput} type="text" name="email" value= {this.state.email} 
                    onChange={this.handleChange} /> <br/><br/>

                    <input className={classes.formSubmit} type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddPatient;