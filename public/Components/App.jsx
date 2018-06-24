import React from 'react';
import PollPage from './PollPage.jsx';
import Poll from './Poll.jsx';
import CreateAccount from './CreateAccount.jsx';
import SignIn from './SignIn.jsx';

export class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            polls: {},
            location: 'home',
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
    changeLocation(location){
        this.setState( {location: location} );
    }
    changeToPoll(poll){
        this.setState( {selectedPoll: poll} );
    }
    render(){
        return(
            <div>
                <a onClick = {() => this.changeLocation('home')} >Home</a>
                <a onClick = {() => this.changeLocation('polls')} >List of Polls</a>
                <a onClick = {() => this.changeLocation('signIn')} >Sign In</a>
                <a onClick = {() => this.changeLocation('createAccount')} >Create Account</a>
                <hr />
                {( this.state.location === 'polls' && <PollPage 
                    polls = {this.state.polls} 
                    changeToPoll = {this.changeToPoll}
                    changeLocation = {this.changeLocation}
                />)}
                {this.state.location === 'selectedPoll' && <Poll poll = {this.state.selectedPoll}/>}
                {this.state.location === 'signIn' && <SignIn />}
                {this.state.location === 'createAccount' && <CreateAccount />}
            </div>
        )
    }
}

function isEmpty( obj ){
    for (let props in obj){
        return false;
    }
    return true;
}