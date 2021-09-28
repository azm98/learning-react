import React, { Component } from 'react'
import contacts from './data.js'
export default class Search extends Component {
    constructor(props){
        super()
        this.state={
            set:''
        }
    }
    change=(e)=>{
      let currentValue =  e.target.value
      contacts.map(f=>{
      this.setState({set:f.firstname})
      console.log(f.firstname)
      })
    }
    render() {
        return (
            <div>
                <input type="text" autoComplete="on" placeholder="enter the search" onChange={this.change}>
                </input>
            </div>
        )
    }
}
