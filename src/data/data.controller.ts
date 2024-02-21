import { Controller, Post, Body, Get } from '@nestjs/common';
import { DataService } from './data.service';
import { Data } from './data.entity';

@Controller('data')
export class DataController {
    constructor(private readonly dataService: DataService) { }

    @Post()
    async create(@Body() data: Partial<Data>): Promise<Data> {
        return await this.dataService.create(data);
    }

    @Get()
    async findAll(): Promise<Data[]> {
        return await this.dataService.findAll();
    }

    @Get('create')
    async createWithGet(@Body() data: Partial<Data>): Promise<Data> {
        return await this.dataService.create(data);
    }
}