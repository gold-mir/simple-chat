import * as React from 'react'
import { RootState } from '../store/root'
import { connect } from 'react-redux'

interface Props {
    things: string[]
}

function Stuff({ things }: Props){
    return (
        <ul>
            {things.map((thing, index) => <li key={index}>{thing}</li> )}
        </ul>
    )
}

function mapStateToProps(state: RootState): Props{
    return { things: state.stuff.things }
}

const ConnectedStuff = connect(mapStateToProps)(Stuff)

export default ConnectedStuff