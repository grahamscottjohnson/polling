import React from 'react';

const CreateAccount = (props) => {
    return (
        <div>
            <h3>Create an Account</h3>
            <form method = "POST" action="/users">
                <label htmlFor="name">Name:</label>
                <input type="text" id = "name" name = "name"/>
                <label htmlFor="password">Password:</label>
                <input type="text" id = "password" name = "password"/>
                <label htmlFor="email">Email:</label>
                <input type="text" id = "email" name = "email"/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default CreateAccount;