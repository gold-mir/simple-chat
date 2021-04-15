import { io, Socket } from 'socket.io-client'

export class ChatHandler {
    private socket: Socket;
    private initialized: boolean = false;

    public init(): ChatHandler {
        let socket = io('localhost:3000')
        this.initialized = true

        socket.on('connect', (socket: Socket): void => {
            console.log('connected')
        })
        
        this.socket = socket
        console.log('initializing chat')
        return this
    }

    private checkInit(): void{
        if(!this.initialized){
            throw new Error('ChatHandler is not initialized')
        }
    }

    public getSocket(): Socket {
        this.checkInit()
        return this.socket;
    }
}