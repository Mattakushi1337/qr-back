import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Data } from './data.entity';

@Injectable()
export class DataService {
    constructor(
        @InjectRepository(Data)
        private readonly dataRepository: Repository<Data>,
    ) { }

    async create(data: Partial<Data>): Promise<Data> {
        const newData = this.dataRepository.create(data);
        newData.date = new Date();
        const savedData = await this.dataRepository.save(newData);
        console.log(savedData);

        return savedData;
    }

    async findAll(): Promise<Data[]> {
        return await this.dataRepository.find();
    }
}