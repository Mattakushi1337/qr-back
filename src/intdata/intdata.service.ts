import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IntData } from './intdata.entity';

@Injectable()
export class IntDataService {
    constructor(
        @InjectRepository(IntData)
        private readonly intDataRepository: Repository<IntData>,
    ) { }

    async findByName(id: string): Promise<IntData | undefined> {
        return await this.intDataRepository.findOne({ where: { id } });
    }

    async findAll(): Promise<IntData[]> {
        return await this.intDataRepository.find();
    }

    async updateCheckColumn(id: number): Promise<void> {
        await this.intDataRepository.update(id, { check: 1 });
    }

    async updateCheckColumnNo(id: number): Promise<void> {
        await this.intDataRepository.update(id, { check: 0 });
    }

    async updateById(id: string, params: Partial<IntData>): Promise<void> {
        await this.intDataRepository.update(id, params);
    }
}
