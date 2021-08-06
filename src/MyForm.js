import React, { Component } from 'react'

export default class MyForm extends Component {
    state={
        name:'',
        favouritePet:'',
        rememberMe:false,
        title:"Mr."
    }
    handleChange= event => {
        this.setState({
            name:event.target.value
        })
        console.log(event.target.value)
    }
    handlefavouritepetChange=(event)=>{
        this.setState({
            favouritePet:event.target.value
        })
        console.log(event.target.value)
    }
    handelCheck=(event)=>{
        this.setState=({
            rememberMe:event.target.checked
        })
        console.log(event.target.checked)
    }
    handleSelect=(event)=>{
        this.setState({
            title:event.target.value
        })
        console.log(event.target.value)
    }
    handlesubmit=()=>{
        console.log(this.state)
    }
    render() {
        
        return (
            <div>
                <input value={this.state.name} onChange={this.handleChange}/>
                <textarea 
                value ={this.state.favouritePet}
                 onChange={this.handlefavouritepetChange}
                 />
                <input type="checkbox"
                checked={this.state.rememberMe}
                onChange={this.handelCheck}
                />
                <div>
                    <select value={this.state.title} onChange={this.handleSelect}>
                        <option>Mr.</option>
                        <option>Miss.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                    </select>
                    <button type="submit" onClick={this.handlesubmit}>Submit</button>
                </div>
            </div>
        )
    }
}
