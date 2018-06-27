import React from 'react';

class AddPoll extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            responses: [],
        }
        this.changeInput = this.changeInput.bind(this);
        this.addResponse = this.addResponse.bind(this);
    }
    changeInput(index){
        const newResponses = this.state.responses.slice();
        newResponses[index] = event.target.value;
        this.setState({
            responses: newResponses
        })
    }
    addResponse(){
        const newResponses = this.state.responses.slice();
        newResponses.push('');
        this.setState({
            responses: newResponses
        })
    }
    render(){
        return(
            <div>
                <form action="/polls" method='POST'>
                    <label htmlFor="question">Poll Question:</label>
                    <input type="text" id='question' name='question'/>
                    <h6>Responses</h6>
                    <ul id='response-list'>
                        {this.state.responses.map( (response, index) => {
                            return <li key={index}><input type="text" name={index} onChange = {(event) => this.changeInput(event, index)}/></li>
                        })}
                        <button type='submit'>Submit Poll</button>
                    </ul>
                </form>
                <button onClick = {this.addResponse}>Add Response</button>
            </div>
        )
    }
}

export default AddPoll;