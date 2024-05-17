import { WebSocketGateway, WebSocketServer, OnGatewayInit, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: '*',
        credentials: true
    }
})
export class AppGateway implements OnGatewayInit {
    @WebSocketServer() server: Server;

    afterInit(server: Server) {
        console.log('WebSocket initialized');
    }

    handleConnection(client: Socket) {
        console.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('animation_1')
    handleAnimation1(@MessageBody() data: any): void {
        console.log('animation_1', data);
        this.server.emit('animation_1', data);
    }

    @SubscribeMessage('animation_2')
    handleAnimation2(@MessageBody() data: any): void {
        console.log('animation_2', data);
        this.server.emit('animation_2', data);
    }

    @SubscribeMessage('animation_3')
    handleAnimation3(@MessageBody() data: any): void {
        console.log('animation_3', data);
        this.server.emit('animation_3', data);
    }

    @SubscribeMessage('animation_4')
    handleAnimation4(@MessageBody() data: any): void {
        console.log('animation_4', data);
        this.server.emit('animation_4', data);
    }
}
