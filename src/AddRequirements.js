import React from 'react';
import classes from './Login/Form.module.css';

class AddRequirements extends React.Component {
    constructor(props){
        super(props);
        this.state = {requirements: "", info: ""}
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        let current = new Date();
        let time = current.toLocaleString()
        fetch(`http://localhost:4000/hospital/${this.props.id}/pharmacy`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({date: time, required_pharmacy: this.state.requirements, info: this.state.info})
            }).then((response) => response.json())
                .then((json) => {
                    window.location.reload();
                    console.log(json);
                    alert(json);
                })
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    render(){
        console.log("Render called");
        return(
            <div>
                <h1>ADD PATIENT REQUIREMENTS:</h1> <br/>
                <form onSubmit = {this.handleSubmit} >
                    <label className={classes.formLabel}>Requirements</label><br/>
                    <input className={classes.formInput} type="text" name="requirements"  value={this.state.requirements}  
                    onChange={this.handleChange} /> <br/><br/>

                    <label className={classes.formLabel}>Info</label><br/>
                    <input className={classes.formInput} type="text" name="info"  value={this.state.info}  
                    onChange={this.handleChange} /> <br/><br/>

                    <input className={classes.formSubmit} type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddRequirements;