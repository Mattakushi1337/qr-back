import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({ origin: '*' }));

  await app.listen(parseInt(process.env.PORT));
  const io = require('socket.io')(await app.listen(parseInt(process.env.PORT)), {
    cors: {
      origin: '*',
    },
  });

  app.useWebSocketAdapter(new IoAdapter(app));

  await app.init();
}

bootstrap();
