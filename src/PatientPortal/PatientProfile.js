import React from 'react';
import classes from '../Login/Form.module.css';
import Navbar from "./Navbar";

class UpdateProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {firstname: "", lastname: "", email: "", contact: 1, id: ""}
    }

    componentDidMount(){
        fetch(`https://doracle-backend.herokuapp.com/hospital/show/${this.props.match.params.patientid}`)
        .then((response) => response.json())
        .then((data2) => {
            console.log(data2);
            this.setState({firstname: data2.firstname, lastname: data2.lastname, email: data2.email, contact: data2.contact, id: data2._id});
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://doracle-backend.herokuapp.com/hospital/update/${this.state.id}`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({firstname: this.state.firstname, lastname: this.state.lastname, email: this.state.email, contact: this.state.contact})
            }).then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    alert(json);
                })

                window.location='/patient/'
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }
    render(){
        return(
            <div>
                <Navbar/>
                <div className={classes.formouter}>
                    <h1 className={classes.formh1}>UPDATE YOUR DETAILS:</h1>
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

export default UpdateProfile;