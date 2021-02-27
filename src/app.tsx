import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
import rootReducer from './store/index'
import { ADD_THING } from './store/index'
import { Provider } from 'react-redux'

import Stuff from './components/stuff'
import Chat from './components/chat'

function App(): React.ReactElement{
    return (
        <Provider store={store}>
            <Chat/>
        </Provider>
    )
}

export const store = createStore(rootReducer)

store.dispatch({type: ADD_THING, payload: "I love my wife"})
store.dispatch({type: ADD_THING, payload: "My wife is very soft and cute"})

export const render = (): void => { ReactDOM.render(<App/>, document.getElementById('react-app-root')) }