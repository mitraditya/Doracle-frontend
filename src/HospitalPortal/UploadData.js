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

        fetch('https://doracle-backend.herokuapp.com/hospital/upload', {
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
            <div className={classes.full}>
                <Navbar/>
                <div className={classes.formouter}>
                    <br></br><br></br>
                    <h1 className={classes.formh1}>UPLOAD PATIENT DATABASE:</h1>
                    <br></br><br></br>
                    <img src="https://image.freepik.com/free-vector/list-flat-illustration_183665-75.jpg"></img>
                    <form onSubmit = {this.handleSubmit} >
                        <label className={classes.formlabel}>
                            <input className={classes.forminput} name="csvfile" type="file" placeholder="Select a csv file:" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        onChange={this.handleChange} />
                        </label>
                        <input className={classes.formsubmit} type="submit" value="Submit" />
                    </form>
                    <br></br><br></br>
                </div>
            </div>
        )
    }
}

export default UploadData;