import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Data } from './data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Data])],
  providers: [DataService],
  controllers: [DataController]
})
export class DataModule { }
