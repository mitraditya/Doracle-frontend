import React from 'react';
import classes from './Form.module.css';

class HospitalForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {HospitalID: "", Password: ""}
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(this.state));
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }
    render(){
        return(
            <div>
                <form style={{marginTop:'10em'}} onSubmit = {this.handleSubmit} >
                    <label className={classes.formLabel}>Hospital ID</label><br/>
                    <input className={classes.formInput} type="text" name="HospitalID"  value={this.state.HospitalID}  
                    onChange={this.handleChange} /> <br/><br/>

                    <label className={classes.formLabel}>Password</label><br/>
                    <input className={classes.formInput} type="password" name="Password" value= {this.state.Password} 
                    onChange={this.handleChange} /> <br/><br/>

                    <input className={classes.formSubmit} type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default HospitalForm;