import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;

    afterInit(server: Server) {
        console.log('WebSocket initialized');
    }

    @SubscribeMessage('animation_1')
    handleAnimation1(@MessageBody() data: any): void {

        this.server.emit('animation_1', data);
    }

    @SubscribeMessage('animation_2')
    handleAnimation2(@MessageBody() data: any): void {

        this.server.emit('animation_2', data);
    }

    @SubscribeMessage('animation_3')
    handleAnimation3(@MessageBody() data: any): void {

        this.server.emit('animation_3', data);
    }

    @SubscribeMessage('animation_4')
    handleAnimation4(@MessageBody() data: any): void {

        this.server.emit('animation_4', data);
    }
}
