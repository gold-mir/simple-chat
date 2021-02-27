import * as React from 'react'
import { RootState } from '../store/index'
import { Message } from '../store/chat'
import { connect, useSelector } from 'react-redux'

// interface Props {
//     messages: Message[]
// }

function ChatBox() {
    const selectMessages = (state: RootState) => state.chat.messages
    const messages = useSelector(selectMessages)
    return (
        <ul>
            {messages.map((message, index) => <li key={index}>{message.sender}: {message.body}</li> )}
        </ul>
    )
}

// function mapStateToProps(state: RootState): Props{
//     return {
//         messages: state.chat.messages
//     }
// }

// const ConnectedChatBox = connect(mapStateToProps)(ChatBox)

export default ChatBox