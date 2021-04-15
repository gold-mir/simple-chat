import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './store/rootReducer'
import { Provider } from 'react-redux'

import chatMiddleware from './chat/chatMiddleware'
import { CONNECT } from './chat/chatMiddleware'

import Chat from './components/chat'

export const store = createStore(rootReducer, applyMiddleware(chatMiddleware, thunk))

function App(): React.ReactElement{
    store.dispatch({
        type: CONNECT
    })
    return (
        <Provider store={store}>
            <Chat/>
        </Provider>
    )
}

export const render = (): void => { ReactDOM.render(<App/>, document.getElementById('react-app-root')) }