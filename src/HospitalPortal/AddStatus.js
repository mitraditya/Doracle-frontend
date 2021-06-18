import React from 'react';
import classes from '../Login/Form.module.css';
import moment from 'moment';
import Alerting from '../Alerting';

class AddPatientStatus extends React.Component {
    constructor(props){
        super(props);
        this.state = {note: "", alert: ""}
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
                    //window.location.reload();
                    console.log(json);
                    this.setState({alert: json})
                })
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    render(){
        return(
            <div className={classes.requiredform}>
                <h3 className={classes.adstatus}>Add Patient Status:</h3> <br/>
                {this.state.alert ? <Alerting text={this.state.alert} />: null}
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