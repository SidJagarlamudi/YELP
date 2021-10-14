import React, { Component } from 'react'


export default class textInput extends Component {
    state={
        text: ''
    }
    onChange = (e)=>{
        this.setState({
            text: e.target.value
        },
            this.props.getValue(this.state.text)
        )
    }
    render() {
        return (
            <input 
                className={this.props.className} 
                placeholder={this.props.placeholder}
                name={this.props.name}
                value={this.state.text}
                onChange={this.onChange.bind(this)}
                />
        )
    }
}
