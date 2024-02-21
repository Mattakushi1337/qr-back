import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { IntDataService } from './intdata.service';
import { IntData } from './intdata.entity';

@Controller('intdata')
export class IntDataController {
    constructor(private readonly intDataService: IntDataService) { }

    @Get(':name')
    async findByName(@Param('name') name: string): Promise<IntData> {
        return this.intDataService.findByName(name);
    }

    @Get()
    async findAll(): Promise<IntData[]> {
        return this.intDataService.findAll();
    }

    @Patch(':id/update-check')
    async updateCheckColumn(@Param('id') id: string): Promise<void> {
        await this.intDataService.updateCheckColumn(+id);
    }

    @Patch(':id/update-checkno')
    async updateCheckColumnNo(@Param('id') id: string): Promise<void> {
        await this.intDataService.updateCheckColumnNo(+id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updatedFields: Partial<IntData>): Promise<void> {
        await this.intDataService.updateById(+id, updatedFields);
    }
}
