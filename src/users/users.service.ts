import { Injectable } from '@nestjs/common';

import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) { }
  create(user: Partial<Users>): Promise<Users> {
    const newUser = this.usersRepository.create(user)
    const saveUser = this.usersRepository.save(newUser)
    return saveUser;
  }

  async findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    return this.usersRepository.findOne({ where: { id } });
  }

  async update(id: number, params: Partial<Users>): Promise<void> {
    await this.usersRepository.update(id, params);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
