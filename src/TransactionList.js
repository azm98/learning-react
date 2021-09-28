import React, { Component } from 'react'
import TransactionForm from './TransactionForm'

export default class TransactionList extends Component {
    state={
        list:this.returnList()
    }
    returnList() {
        if(localStorage.getItem('transactions') == null)
            localStorage.setItem('transactions',JSON.stringify([]))
        return JSON.parse(localStorage.getItem('transactions'))
    }

    onAddEdit = (data) => {
        var list=this.returnList()
        list.push(data)
        localStorage.setItem('transactions',JSON.stringify(list))
        this.setState({list})
    }
    render() {
        return (
            <div>
                <TransactionForm
                onAddEdit={this.onAddEdit}
                />
                <p>Transaction list here</p>
            </div>
        )
    }
}
