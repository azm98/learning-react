import React, { Component } from 'react'

export default class TransactionForm extends Component {
    state={
        bAccountNo:'',
        Ifsc:'',
        bName:'',
        amount:''
    }
    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=e=>{
        e.preventDefaullt()
        this.props.onAddEdit(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <input name="bAccountNo" placeholder="b account" value={this.state.bAccountNo} onChange={this.handleChange}></input><br/>
                    <input name="Ifsc" placeholder="if sc" value={this.state.Ifsc} onChange={this.handleChange}></input><br/>
                    <input name="bName" placeholder="account holder name" value={this.state.bName} onChange={this.handleChange}></input><br/>
                    <input name="amount" placeholder="amount" value={this.state.amount} onChange={this.handleChange}></input><br/>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}
