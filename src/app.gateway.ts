import { WebSocketGateway, WebSocketServer, OnGatewayInit, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: '*',
    credentials: true,
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

  @SubscribeMessage('start_1')
  startAnimation1(): void {
    this.server.emit('start_1', { trigger: true });
  }

  @SubscribeMessage('start_2')
  startAnimation2(): void {
    this.server.emit('start_2', { trigger: true });
  }

  @SubscribeMessage('start_3')
  startAnimation3(): void {
    this.server.emit('start_3', { trigger: true });
  }

  @SubscribeMessage('start_4')
  startAnimation4(): void {
    this.server.emit('start_4', { trigger: true });
  }

}
