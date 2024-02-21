import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { IntdataModule } from './intdata/intdata.module';
import { IntDataController } from './intdata/intdata.controller';
import { IntDataService } from './intdata/intdata.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'HelloWorld2023!',
      database: 'qr',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    DataModule,
    IntdataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }