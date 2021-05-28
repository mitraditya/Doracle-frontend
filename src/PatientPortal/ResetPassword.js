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
                    window.location='/patient/'
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }
    render(){
        return(
            <div>
                <Navbar/>
                <div className={classes.formouter}>
                    <h1 className={classes.formh1}>RESET YOUR PASSWORD:</h1>
                    <form onSubmit = {this.handleSubmit} >
                    
                        <label className={classes.formlabel}>
                            <input className={classes.forminput} type="password" name="password" placeholder="New Password" value= {this.state.password} 
                            onChange={this.handleChange} />
                            <span className={classes.formspan}>New Password</span>
                        </label>

                        <label className={classes.formlabel}>
                            <input className={classes.forminput} type="password" name="confirmpassword" placeholder="Confirm Password" value= {this.state.confirmpassword} 
                            onChange={this.handleChange} />
                            <span className={classes.formspan}>Confirm Password</span>
                        </label>

                        <input className={classes.formsubmit} type="submit" value="Confirm" />
                    </form>
                </div>
            </div>
        )
    }
}

export default ResetPassword;