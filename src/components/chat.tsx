import * as React from 'react'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { Message, sendMessage } from '../store/chatReducer'

import ChatBox from './chatbox'
import ChatInput from './chatinput'

function Chat(){

    const dispatch = useDispatch()

    const handleNewMessage = (body: string) => {
        let message: Message = {
            sender: "Miranda",
            timestamp: Date.now(),
            body: body
        }
        dispatch(sendMessage(message))
    }

    return(
        <div>
            <ChatBox/>
            <ChatInput onSubmit={useCallback(handleNewMessage, [dispatch])}/>
        </div>
    )
}

export default Chat