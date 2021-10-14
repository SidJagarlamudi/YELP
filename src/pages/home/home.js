import React, { Component } from 'react'
import Search from './search/search'
import BuisnessTable from './buisnessTable/buisnessTable'
import styles from './home.module.css'

export default class home extends Component {
    state = {
        data: [],
    }
    // This function is called within the ./Search component when the submit button is clicked. 
    getData = (e) =>{
        this.setState({
            data: e
        })
    }
    render() {
        //Only Displays Table when there is data to hydrate it.
        let table = null;
        if(this.state.data.length > 0)
            table = <BuisnessTable data={this.state.data}/>

        return (
            <div class={styles.container}>
                <Search getData={this.getData.bind(this)}/>
                
                {table}
            </div>
        )
    }
}
