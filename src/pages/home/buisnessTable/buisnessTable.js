import React, { Component } from 'react'
import { NavLink, Route, Link } from 'react-router-dom'
import styles from './buisnessTable.module.css'

export default class buisnessTable extends Component {
    state = {
        headers: ['Business name', 'link']
    }
    renderHeaders = ()=>{
        return this.state.headers.map((x,i)=>{
            return <th key={i}>{x}</th>
        })
    }
    renderTableData = ()=>{
        let data = this.props.data.map((x,i)=>{
            let link = <Link to={{
                            pathname:'/view',
                            state:{data:x}
                        }}>
                            View
                        </Link> 
            return <tr key={i}>
                <td style={{color: "green"}} className={styles.firstColumn}>{x.name}</td>
                <td className={styles.secondColumn}>{link}</td>
            </tr>
        })
        return data;
    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>{this.renderHeaders()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}
