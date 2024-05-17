import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors({ origin: '*' }));

  const httpServer = app.getHttpServer();
  const io = require('socket.io')(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  await app.listen(parseInt(process.env.PORT));
}

bootstrap();
