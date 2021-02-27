import * as React from 'react'
import { Component } from 'react'


interface State {
    text: string
}

type SubmitFunction = (text: string) => void

interface Props {
    onSubmit: SubmitFunction
}

class ChatInput extends Component<Props, State> {

    state = {
        text:""
    }

    private handleChange(event: React.FormEvent<HTMLInputElement>): void {
        event.preventDefault()
        this.setState({text: event.currentTarget.value})
    }

    private handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>): void {
        let key = event.key
        if(key === "Enter") {
            this.submit(event)
        }
    }

    private submit(event: React.FormEvent<HTMLInputElement>): void {
        event.preventDefault()
        if(this.state.text.length > 0){
            this.props.onSubmit(this.state.text)
            this.setState({text: ""})
        }
    }
    
    render() {
        return(
            <div>
                <input type="text"
                    autoFocus={true}
                    placeholder="type a message"
                    value={this.state.text}
                    onChange={this.handleChange.bind(this)}
                    onKeyPress={this.handleKeyPress.bind(this)}
                />
                <button onClick={this.submit.bind(this)}>Send</button>
            </div>
        ) 
    }
}

export default ChatInput