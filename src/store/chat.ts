export const SEND_MESSAGE = "SEND_MESSAGE"

export type ChatAction = SendMessageAction

export interface Message {
    sender: string
    timestamp: number
    body: string
}

export interface ChatState {
    messages: Message[]
}

interface SendMessageAction {
    type: typeof SEND_MESSAGE
    payload: Message
}

const initialState: ChatState = {
    messages: []
}

//export action creators
export function sendMessage(newMessage: Message): ChatAction {
    return {
        type: SEND_MESSAGE,
        payload: newMessage
    }
}

//export chat reducer
export function chatReducer(state: ChatState = initialState, action: ChatAction): ChatState{
    switch(action.type){
        case SEND_MESSAGE:
            return {...state, messages:[ ...state.messages, action.payload]}
        default: 
            return state
    }
}