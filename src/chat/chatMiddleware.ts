import { io, Socket } from 'socket.io-client';
import { AppThunk } from '../store/rootReducer'

export const SOCKET_ACTION = 'SOCKET_ACTION'
export const CONNECT = "CONNECT"
export const DISCONNECT = "DISCONNECT"

export type SocketActions = typeof SOCKET_ACTION | typeof CONNECT | typeof DISCONNECT 

export interface SocketAction {
    type: typeof SOCKET_ACTION
    action: (dispatch: any, getState: any, socket: Socket) => void
}

function isSocketAction(action: any): action is SocketAction {
    if((action as SocketAction).type){
        return true
    }
    return false
}

function setupSocketListeners(socket: Socket): void{
    socket.on('connect', () => {
        console.log('connected')
    })
}

function chatMiddleware() {
    let socket: Socket = null;

    return (store) => (next) => (action) => {
        switch(action.type){
            //returns a function that can be processed by redux-thunk that has access to the socket instance
            case SOCKET_ACTION:
                let socketAction = action as SocketAction
                let actionWithSocket: AppThunk<void> = (dispatch: any, getState: any): void => {
                    socketAction.action(dispatch, getState, socket)
                }
                next(actionWithSocket)
                break;
            case CONNECT:
                if(socket !== null){
                    socket.close()
                }

                socket = io('localhost:3000')
                setupSocketListeners(socket)

                break;
            case DISCONNECT:
                if(socket !== null){
                    socket.close()
                }
                socket = null
                break;
            default: 
                next(action)
        }
    }
}

export default chatMiddleware()