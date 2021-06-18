import React from 'react';
import classes from '../Login/Form.module.css';
import moment from 'moment';

class AddRequirements extends React.Component {
    constructor(props){
        super(props);
        this.state = {requirements: "", info: ""}
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        let cdate = moment().format('DD/MM/YYYYTh:mm:ss a');
        console.log(cdate);
        fetch(`https://doracle-backend.herokuapp.com/hospital/${this.props.id}/pharmacy`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({date: cdate, required_pharmacy: this.state.requirements, info: this.state.info})
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
            <div className={classes.requiredform}>
                <h3 className={classes.adstatus}>Add Patient Requirements :</h3> <br/>
                <form onSubmit = {this.handleSubmit} >
                    <label className={classes.formlabel} style={{display: 'inline-block'}}>
                        <input className={classes.forminput} style={{justifyContent: 'center'}} type="text" name="requirements" placeholder="Requirements" value={this.state.requirements}  
                        onChange={this.handleChange} />
                        <span className={classes.formspan}>Requirements</span>
                    </label>
                    <br></br>
                    <label className={classes.formlabel} style={{display: 'inline-block'}}>
                        <input className={classes.forminput} type="text" name="info" placeholder="Info" value={this.state.info}  
                        onChange={this.handleChange} />
                        <span className={classes.formspan}>Info</span>
                    </label>
                    <br></br>
                    <div className={classes.btnus}> 
                    <input className={classes.formsubmit} type="submit" value="Submit" />
                    </div>
                <br></br><br></br>
                </form>
            </div>
        )
    }
}

export default AddRequirements;