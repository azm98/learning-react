import React, { Component } from 'react'

export default class Storage extends Component {
    state = {
        user: '',
        rememberMe: false
    }
    handleChange=(e)=> {
        const input = e.target;
        const value = input.type === 'checkbox' ? input.checked:input.value
        this.setState({[input.name]:value})

        localStorage.setItem('rememberMe',this.state.rememberMe);
        localStorage.setItem('username',this.state.user)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleChange}>
                    <label>
                        User: <input name="user" value={this.state.user} onChange={this.handleChange} />
                    </label>
                    <label>
                        <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox" /> Remember me
                    </label>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        )
    }
}
