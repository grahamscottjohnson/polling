import React from 'react';

const Poll = (props) => {
    return (
        <div>
            <h2>{props.poll.question}</h2>
            <ul>
                {props.poll.responses.map( (response, index) => {
                    return <li key={index}>{response}</li>
                })}
            </ul>
        </div>
    )
}

export default Poll;