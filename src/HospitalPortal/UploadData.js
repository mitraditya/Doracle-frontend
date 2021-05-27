import React from 'react';
import classes from '../Login/Form.module.css';
import Navbar from "./Navbar";

class UploadData extends React.Component {
    constructor(props){
        super(props);
        this.state = { selectedFile: null }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.selectedFile)
        const formData = new FormData()
        formData.append('myFile',  this.state.selectedFile)
        console.log(formData)

        fetch('http://localhost:4000/hospital/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            alert(data);
        })
        .catch(error => {
            console.error(error)
        })
    }
    handleChange = (event) => {
        this.setState({ selectedFile: event.target.files[0] })
    }

    render(){
        return(
            <div>
                <Navbar/>
                <h1 style={{marginTop: '2em'}}>UPLOAD PATIENT DATABASE:</h1> <br/>
                <form onSubmit = {this.handleSubmit} >
                    <label className={classes.formLabel}>Select a csv file:</label><br/>
                    <input className={classes.formInput} name="csvfile" type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    onChange={this.handleChange} /> <br/><br/>

                    <input className={classes.formSubmit} type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UploadData;