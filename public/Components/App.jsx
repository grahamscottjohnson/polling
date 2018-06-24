import React from 'react';
import PollPage from './PollPage.jsx';
import Poll from './Poll.jsx';

export class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            polls: {},
            location: 'home',
            selectedPoll: {},
        }
    }
    componentDidMount = async () => {
        this.setState({
            polls: await fetch('/api/polls').then( (response) => response.json() ),
        })
    }
    changeLocation = (location) => {
        this.setState( {location: location} );
    }
    changeToPoll = (poll) => {
        this.setState( {selectedPoll: poll} );
    }
    render(){
        return(
            <div>
                <a onClick = {() => this.changeLocation('home')} >Home</a>
                <a onClick = {() => this.changeLocation('polls')} >List of Polls</a>
                {( this.state.location === 'polls' && <PollPage 
                    polls = {this.state.polls} 
                    changeToPoll = {this.changeToPoll}
                    changeLocation = {this.changeLocation}
                />)}
                {( this.state.location === 'selectedPoll' && <Poll poll = {this.state.selectedPoll}/>)}
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