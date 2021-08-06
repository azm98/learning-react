import './App.css';
import React, { Component } from 'react';
import Header from './Header';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      a:0,
    }
  }
  render() {
    const plus = (a) => a=a+1;
    return (
      <div className="App">
        <Header title="hello azm"
         num={5+6}
         obj={{
           a:6,
           b:8

         }}
         Func={plus}/>
      </div>
    )
  }
}

