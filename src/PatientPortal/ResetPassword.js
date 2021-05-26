import React from 'react';
import classes from '../Login/Form.module.css';
import Navbar from "./Navbar";
class ResetPassword extends React.Component {
    constructor(props){
        super(props);
        this.state = {password: "", id: ""}
    }

    componentDidMount(){
        fetch(`http://localhost:4000/hospital/show/${this.props.match.params.patientid}`)
        .then((response) => response.json())
        .then((data2) => {
            console.log(data2);
            this.setState({password: data2.password, id: data2._id});
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:4000/hospital/updatePassword/${this.state.id}`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({password: this.state.password})
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
                <Navbar></Navbar>
                <h1>UPDATE YOUR DETAILS:</h1>
                <form style={{marginTop:'2em'}} onSubmit = {this.handleSubmit} >
                  
                    <label className={classes.formLabel}>Password</label><br/>
                    <input className={classes.formInput} type="password" name="password" value= {this.state.password} 
                    onChange={this.handleChange} /> <br/><br/>

                    <input className={classes.formSubmit} type="submit" value="Confirm" />
                </form>
            </div>
        )
    }
}

export default ResetPassword;