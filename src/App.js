import './App.css';
import React, { Component,useState,useEffect } from 'react';
import Header from './Header';
import Search from './search'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import CheckRouter from './checkRouter';
import BrowseRouter from './browseRouter';
import Learn from './learn'
import Storage from './storage'
import TransactionList from './TransactionList';
import CrudForm from './crudForm';
import Blog from './blog'
import PostApi from './postApi';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      a:0,
      date:new Date(),
      searchText:'',
    }
  }
  // componentWillUnmount(){
  //     clearInterval(this.timerID)
  //     console.log('will')
  // }
  // componentDidMount() {
  //   this.timerID = setInterval(
  //     ()=>this.tick(),
  //     100
  //   )
  //   console.log('did')
  // }
  // tick(){
  //   this.setState({
  //       date:new Date()
  //   })
  // }

  render() {
    // const plus = (a) => a=a+1;
    
    return (
      <Router>
      <div className="App">
        {/* <Header title="hello azm"
         num={5+6}
         obj={{
           a:6,
           b:8

         }}
         Func={plus}/>

         <p>hello {this.state.hello}</p>
         <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
         {/* <Search/> */}
         {/* <h1>Routers</h1>
         <BrowserRouter>
         <Switch>
           <Route path='/check'>
            <CheckRouter/>
           </Route>
        </Switch>
         </BrowserRouter>
         <BrowserRouter>
         <Switch>
           <Route path='/browse'>
            <BrowseRouter/>
           </Route>
        </Switch>
         </BrowserRouter> */}
        {/* <Learn/> */}
        {/* <Storage/> */}
        {/* <TransactionList/> */}
        {/* <CrudForm/> */}
        {/* <Blog/> */}
        {/* <PostApi/> */}
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/create'>
              <Create/>
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
        
      </div>
      </Router>
    )
  }
}

