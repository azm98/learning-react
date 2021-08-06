import React, { Component } from 'react'
const initialState={
    name:'',
    email:'',
    password:'',
    nameError:'',
    emailError:'',
    passwordError:''    
}
export default class ValidationForm extends Component {
    constructor(props){
        super(props)
       this.state=initialState
    }
    handleChange=(event)=>{
        const isCheckbox = event.target.type==='checkbox';
        this.setState({
            [event.target.name]:isCheckbox?
            event.target.checked :
            event.target.value
        });
    };

    validate=()=>{
        let nameError="";
        let emailError="";
        let passwordError="";
        if(!this.state.name) {
            nameError="name can not be blank"
        }

        if(!this.state.password) {
            passwordError="password can not be blank"
        }
        if(!this.state.email.includes("@")) {
            emailError="invalid email"
        }

        if(emailError || nameError || passwordError){
            this.setState({emailError,nameError,passwordError})
            return false;
        }
       return true;
    }
    handlesubmit=(event)=>{
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            console.log(this.state)
            this.setState(initialState)
        }
    }
    render() {
        return (
            <form onSubmit={this.handlesubmit}>
            <div>
                <div>
                    <input value ={this.state.name} onChange={this.handleChange} name="name" type="text" placeholder="name"/>
                    <div style={{color:'red',font:12}}>
                        {this.state.nameError}
                    </div>
                </div>
                <div>
                    <input value ={this.state.email} onChange={this.handleChange} name="email" type="email" placeholder="email"/>
                    <div style={{color:'red',font:12}}>
                        {this.state.emailError}
                    </div>
                </div>
                <div>
                    <input value={this.state.password} onChange={this.handleChange} name="password" type="password" placeholder="password"/>
                    <div style={{color:'red',font:12}}>
                        {this.state.passwordError}
                    </div>
                 </div>
                
                <div><button>Submits</button></div>
            </div>
            </form>
        )
    }
}
