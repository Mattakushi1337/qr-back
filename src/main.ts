import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as cors from 'cors';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./src/cert/key.pem'),
    cert: fs.readFileSync('./src/cert/cert.pem'),
  };

  const app = await NestFactory.create(
    AppModule,
    { httpsOptions },
  );
  app.use(cors({ origin: '*' }));

  await app.listen(3001);
}

bootstrap();
