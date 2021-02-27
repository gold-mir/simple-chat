import { chatReducer } from './chat'
import { combineReducers } from 'redux'

export interface StateShape {
    things: string[]
}

const initialState: StateShape = {
    things: []
}

export const ADD_THING = "ADD_THING"
export const REMOVE_THING = "REMOVE_THING"

interface AddThingAction {
    type: typeof ADD_THING,
    payload: string
}

interface RemoveThingAction {
    type: typeof REMOVE_THING
    payload: number
}

export type Action = AddThingAction | RemoveThingAction

function stuffReducer (state = initialState, action: Action){
    switch (action.type){
        case ADD_THING:
            return {...state, things: [...state.things, action.payload]}
        default:
            return state
    }
}

const rootReducer = combineReducers({
    chat: chatReducer,
    stuff: stuffReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer