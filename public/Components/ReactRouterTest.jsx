import React from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import PollPage from './PollPage.jsx';
import Poll from './Poll.jsx';
import CreateAccount from './CreateAccount.jsx';
import SignIn from './SignIn.jsx';
import AddPoll from './AddPoll.jsx';

export class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            polls: {},
            selectedPoll: {},
            selectedUser: {},
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
        this.changeToPoll = this.changeToPoll.bind(this);
    }
    async componentDidMount(){
        this.setState({
            polls: await fetch('/api/polls').then( (response) => response.json() ),
        })
    }
    changeToPoll(poll){
        this.setState( {selectedPoll: poll} );
    }
    render(){
        return(
            <Router>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/polls'>List of Polls</Link>
                    <Link to='/users/signIn'>Sign In</Link>
                    <Link to='/users/createAccount'>Create Account</Link>
                    <Link to='/polls/add'>Add Poll</Link>
                    <hr />
                    {/* {<PollPage 
                        polls = {this.state.polls} 
                        changeToPoll = {this.changeToPoll}
                        changeLocation = {this.changeLocation}
                    />}
                    {<Poll poll = {this.state.selectedPoll}/>}
                    {<SignIn />}
                    {<CreateAccount />}
                    {<AddPoll />} */}
                </div>
            </Router>
        )
    }
}

function isEmpty( obj ){
    for (let props in obj){
        return false;
    }
    return true;
}