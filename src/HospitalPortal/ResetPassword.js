import React from 'react';
import classes from '../Login/Form.module.css';
import Navbar from "./Navbar";
class ResetPassword extends React.Component {
    constructor(props){
        super(props);
        this.state = {password: "", confirmpassword: "", id: ""}
    }

    componentDidMount(){
        fetch(`http://localhost:4000/hospital/show/${this.props.match.params.patientid}`)
        .then((response) => response.json())
        .then((data2) => {
            console.log(data2);
            this.setState({id: data2._id});
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.password!=this.state.confirmpassword)
            alert("Password must be same as confirm password");
        else{
            fetch(`http://localhost:4000/hospital/updatePassword/${this.state.id}`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({password: this.state.password})
                }).then((response) => response.json())
                    .then((json) => {
                        console.log(json);
                        alert(json);
                    })
                    window.location='/hospital'
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <h1 style={{marginTop: '2em'}}>RESET YOUR PASSWORD :</h1>
                <form style={{marginTop:'2em'}} onSubmit = {this.handleSubmit} >
                  
                    <label className={classes.formLabel}>Password</label><br/>
                    <input className={classes.formInput} type="password" name="password" value= {this.state.password} 
                    onChange={this.handleChange} /> <br/><br/>

                    <label className={classes.formLabel}>Confirm Password</label><br/>
                    <input className={classes.formInput} type="password" name="confirmpassword" value= {this.state.confirmpassword} 
                    onChange={this.handleChange} /> <br/><br/>

                    <input className={classes.formSubmit} type="submit" value="Confirm" />
                </form>
            </div>
        )
    }
}

export default ResetPassword;