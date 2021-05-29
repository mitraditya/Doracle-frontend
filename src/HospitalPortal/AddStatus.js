import React from 'react';
import classes from '../Login/Form.module.css';
import moment from 'moment';

class AddPatientStatus extends React.Component {
    constructor(props){
        super(props);
        this.state = {note: ""}
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.props.id);
        let cdate = moment().format('DD/MM/YYYYTh:mm:ss a');
        console.log(cdate);
        fetch(`https://doracle-backend.herokuapp.com/hospital/${this.props.id}/status`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({date: cdate, note: this.state.note})
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
                    <label className={classes.formlabel} style={{display: 'inline-block'}}>
                        <input className={classes.forminput} style={{justifyContent: 'center'}} type="text" name="note" placeholder="Condition" value={this.state.note}  
                        onChange={this.handleChange} />
                        <span className={classes.formspan}>Condition</span>
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input className={classes.formsubmit} type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddPatientStatus;