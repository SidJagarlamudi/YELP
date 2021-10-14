import React, { Component } from 'react'
import {link, withRouter} from 'react-router-dom'
import styles from './view.module.css'

class view extends Component {
    componentDidMount(){
        console.log(this.props.location.state.data)
        
    }
    render() {
        let data = this.props.location.state.data
        return (
            <div className={styles.container}>
                <h2 className={styles.h2}>{data.name}</h2>
                <img className={styles.img} src={data.image_url} alt="business image"/>
                <div>
                    <span className={styles.ratting}>Rating: </span> {data.rating}
                    <br/>
                    <span className={styles.pricing}>Pricing: </span> {data.price}
                    <br/>
                    <span className={styles.location}>Location: </span> {data.location.address1}
                    <br/>
                    <span className={styles.phone_number}>Phone Number: </span> <a href="tel:+">{data.display_phone}</a>
                    <br/>
                    <span  className={styles.pricing}>Website: </span>
                    <a style={{color: "blue"}}
                        className={styles.web_link} 
                        href={data.url} target="_blank" 
                        rel="noopener noreferrer">
                        &nbsp;yelp.com
                    </a>
                </div>
            </div>
        )
    }
}
export default withRouter(view)

