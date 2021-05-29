import React from 'react';
import classes from '../Login/Form.module.css';

class AddRequirements extends React.Component {
    constructor(props){
        super(props);
        this.state = {requirements: "", info: ""}
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        let current = new Date();
        let time = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+(current.getDate()) +"-"+ current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
        
        
        fetch(`https://doracle-backend.herokuapp.com/hospital/${this.props.id}/pharmacy`, {
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
            <div style={{marginTop: '2vh'}}>
                <h1>ADD PATIENT REQUIREMENTS:</h1> <br/>
                <form onSubmit = {this.handleSubmit} >
                    <label className={classes.formlabel}>
                        <input className={classes.forminput} type="text" name="requirements" placeholder="Requirements" value={this.state.requirements}  
                        onChange={this.handleChange} />
                        <span className={classes.formspan}>Requirements</span>
                    </label>

                    <label className={classes.formlabel}>
                        <input className={classes.forminput} type="text" name="info" placeholder="Info" value={this.state.info}  
                        onChange={this.handleChange} />
                        <span className={classes.formspan}>Info</span>
                    </label>

                    <input className={classes.formsubmit} type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddRequirements;