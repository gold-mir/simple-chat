import * as React from 'react'
import * as ReactDOM from 'react-dom'

function App(): React.ReactElement{
    return (
        <h1>I love my wife!</h1>
    )
}

export const render = (): void => { ReactDOM.render(<App/>, document.getElementById('react-app-root')) }