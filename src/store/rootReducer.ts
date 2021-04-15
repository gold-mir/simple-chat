import { chatReducer } from './chatReducer'
import { combineReducers, Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { SocketActions } from '../chat/chatMiddleware'

export interface StateShape {
    things: string[]
}

const initialState: StateShape = {
    things: []
}

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

function rootReducer (state = initialState, action: SocketActions){
    return state
}

const combinedReducers = combineReducers({
    chat: chatReducer,
    stuff: rootReducer
})

export type RootState = ReturnType<typeof combinedReducers>
export default combinedReducers