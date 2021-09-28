import React, { Component } from 'react'

export default class CrudForm extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'React Crud Application',
            act:0,
            index:'',
            datas:[]
        }
    }
    componentDidMount() {
        console.log("focus")
    }
    fsubmit=(e)=>{
        e.preventDefault()
        console.log("try")
    }
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <form ref={this.form}>
                    <input type="text" ref={this.name} placeholder="your name" ></input>
                    <input type="text" ref={this.addre} placeholder="your address" ></input>
                    <button type="submit" onClick={(e)=>this.fsubmit(e)}>submit</button>
                </form>
            </div>
        )
    }
}
