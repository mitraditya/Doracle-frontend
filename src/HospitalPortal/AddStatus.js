import React from 'react';
import classes from '../Login/Form.module.css';

class AddPatientStatus extends React.Component {
    constructor(props){
        super(props);
        this.state = {note: ""}
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        let current = new Date();
        let time = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+(current.getDate()) +"-"+ current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
        console.log(this.props.id);
        fetch(`http://localhost:4000/hospital/${this.props.id}/status`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({date: time, note: this.state.note})
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
        return(
            <div>
                <h1>ADD PATIENT STATUS:</h1> <br/>
                <form onSubmit = {this.handleSubmit} >
                    <label className={classes.formLabel}>Condition</label><br/>
                    <input className={classes.formInput} type="text" name="note"  value={this.state.note}  
                    onChange={this.handleChange} /> <br/><br/>

                    <input className={classes.formSubmit} type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddPatientStatus;