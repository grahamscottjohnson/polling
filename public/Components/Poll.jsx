import React from 'react';

const Poll = (props) => {
    return (
        <div>
            <h2>{props.poll.question}</h2>
            <ol>
                {props.poll.responses.map( (response, index) => {
                    return <li key={index}>{response}</li>
                })}
            </ol>
            <h4>Responses</h4>
            <ol>
                {props.poll.responses.map( (response, index) => {
                    return <li key={index}></li>
                })}
            </ol>
        </div>
    )
}

export default Poll;