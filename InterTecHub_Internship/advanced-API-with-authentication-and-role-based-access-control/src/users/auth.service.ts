import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes } from 'crypto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signup(email: string, password: string, name: string) {
    const existingUser = await this.usersService.find(email);
    if (existingUser.length) {
      throw new BadRequestException('Email is in use');
    }

    const salt = randomBytes(8).toString('hex');
    const hashedPassword = await bcrypt.hash(password + salt, 10);

    const result = salt + '.' + hashedPassword.toString();

    const user = await this.usersService.createUser(email, result, name);
    return user;
  }
  async login() {}
}
