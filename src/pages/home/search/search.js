import React, { Component } from 'react'
import TextInput from '../../../components/textInput'
import styles from './search.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default class search extends Component {   
    state = {
        text: ''
    }
    getBuisnessName = (value)=>{
        this.setState({
            text: value
        })
    }
    async handleSubmit(e){
        e.preventDefault();        
        try{
            let resp = await fetch(`https://plaidypus-test-api.herokuapp.com/?name=${this.state.text}`);
            let data = await resp.json()
            this.props.getData(data)
        }catch(e){
            console.log(e);
            alert('Oops looks like something went Wrong!')
        }
    }
    render() {
        return (

            <form className={styles.form} onSubmit={this.handleSubmit.bind(this)}>
                 <TextField id="filled-basic" label="Please enter a business" variant="filled" 
                    className={styles.textInput}
                                       
                    getValue={this.getBuisnessName.bind(this)}
                />
<Button variant="contained" className={styles.submit}
                    type="submit" 
                    value='submit'
                    >SUBMIT</Button>
              
            </form>
        )
    }
}
