import React from 'react';
//more imports

export default class PollPage extends React.Component{
    render(){
        return(
            <div>
                <h1>List Of Polls</h1>
                <ul>
                    {this.props.polls.map( (poll) => {
                        return <li key={poll.id}><a href={`/api/polls/${poll.id}`}>{poll.question}</a></li>
                    })}
                </ul>
            </div>
        )
    }
}