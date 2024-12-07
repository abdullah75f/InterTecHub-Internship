import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async login(email: string, password: string) {
    const [user] = await this.usersService.find(email);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    const [salt, storedHash] = user.password.split('.');

    const isPasswordValid = await bcrypt.compare(password + salt, storedHash);
    if (!isPasswordValid) {
      throw new BadRequestException('Password is not correct');
    }
    return user;
  }
}
