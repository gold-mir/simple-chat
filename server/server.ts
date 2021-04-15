import * as express from 'express'
import * as http from 'http'
import { Server } from 'socket.io'

const app: express.Application = express()

app.get('*', (req: express.Request, res: express.Response): void => {
    res.send('my wife is cute')
})

const server: http.Server = app.listen(3000, ():void => {
    console.log('server listening')
})

const io: Server = new Server(server, {
    cors: {
        origin: 'http://localhost:9000',
        methods: ["GET", "POST"]
    }
})

io.on('connection', (socket: SocketIO.Socket): void => {
    console.log(`socket ${socket.id} connected`)

    socket.on('message', (data: any, callback: (responseData: any) => void): void => {
        console.log(data.message)
        callback(true)
    })

    socket.on('disconnect', (data: any): void => {
        console.log(`socket ${socket.id} disconnected`)
    }) 
})