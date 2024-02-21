import { Module } from '@nestjs/common';
import { IntDataService } from './intdata.service';
import { IntDataController } from './intdata.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IntData } from './intdata.entity';

@Module({
    imports: [TypeOrmModule.forFeature([IntData])],
    providers: [IntDataService],
    controllers: [IntDataController]
})
export class IntdataModule { }
