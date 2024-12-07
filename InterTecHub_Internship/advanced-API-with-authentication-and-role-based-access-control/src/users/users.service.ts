import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  async createUser(email: string, password: string, name: string) {
    const user = this.usersRepo.create({ email, password, name });
    return this.usersRepo.save(user);
  }

  async find(email: string) {
    return this.usersRepo.find({ where: { email } });
  }
}
