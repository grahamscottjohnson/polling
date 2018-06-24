import React from 'react';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notValid: false,
        }
    }
    render(){
        return (
            <div>
                <h3>Sign In</h3>
                <form method = "GET" action="/users">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id = "name" name = "name"/>
                    <label htmlFor="password">Password:</label>
                    <input type="text" id = "password" name = "password"/>
                    <input type="submit"/>
                </form>
                {this.state.notValid && <p>Invalid Account</p>}
            </div>
        )
    }
}

export default SignIn;