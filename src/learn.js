import React, { Component } from 'react'

export default class Learn extends Component {
    state={
        count:0,
    }
    componentDidMount() {
        document.title=`you clicked ${this.state.count} times`
        console.log(document.title)
    }

    componentDidUpdate() {
        document.title=`you clicled ${this.state.count} times`
        console.log(document.title)
    }
    render() {
        return (
            <div>
                <p>you clicked {this.state.count}</p>
                <button onClick={()=>this.setState({count:this.state.count+1})}>clicked</button>
            </div>
        )
    }
}
