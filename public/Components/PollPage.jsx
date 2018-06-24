import React from 'react';

export default class PollPage extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(poll){
        this.props.changeToPoll( poll );
        this.props.changeLocation( 'selectedPoll' );
    }
    render(){
        return(
            <div>
                <h1>List Of Polls</h1>
                <ul>
                    {this.props.polls.map( (poll) => {
                        return <li key={poll.id}><a onClick = {() => this.handleClick(poll)}>{poll.question}</a></li>
                    })}
                </ul>
            </div>
        )
    }
}