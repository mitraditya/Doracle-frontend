import React from 'react';
import classes from './Login/Form.module.css';

class UpdateProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {firstname: "", lastname: "", email: "", contact: 1, password: "", id: ""}
    }

    componentDidMount(){
        fetch(`http://localhost:4000/hospital/show/${this.props.match.params.patientid}`)
        .then((response) => response.json())
        .then((data2) => {
            console.log(data2);
            this.setState({firstname: data2.firstname, lastname: data2.lastname, email: data2.email, contact: data2.contact, password: data2.password, id: data2._id});
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:4000/hospital/update/${this.state.id}`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({firstname: this.state.firstname, lastname: this.state.lastname, email: this.state.email, contact: this.state.contact, password: this.state.password})
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
                <h1>UPDATE YOUR DETAILS:</h1>
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

                    <label className={classes.formLabel}>Password</label><br/>
                    <input className={classes.formInput} type="password" name="password" value= {this.state.password} 
                    onChange={this.handleChange} /> <br/><br/>

                    <input className={classes.formSubmit} type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UpdateProfile;