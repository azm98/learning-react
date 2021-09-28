import React, { Component } from 'react'
import logo from './logo.svg';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            num:2,
            num1:0,
        }
    }
    render() {
        return (
            <div>
                    <h1 className="App-title">{this.props.title}</h1>
                    <p>{this.props.num}</p>
                    <p>{JSON.stringify(this.props.obj)}</p>
                    <button onClick={this.props.Func}>click :</button>
                    {console.log(this.props.Func(this.state.num1))}
            </div>
        )
    }
}
