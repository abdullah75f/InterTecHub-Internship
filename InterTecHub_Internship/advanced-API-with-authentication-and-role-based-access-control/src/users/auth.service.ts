import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes } from 'crypto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(
    email: string,
    password: string,
    name: string,
    role: 'admin' | 'user' = 'user',
  ) {
    const existingUser = await this.usersService.find(email);
    if (existingUser.length) {
      throw new BadRequestException('Email is in use');
    }

    const salt = randomBytes(8).toString('hex');
    const hashedPassword = await bcrypt.hash(password + salt, 10);

    const result = salt + '.' + hashedPassword.toString();

    const user = await this.usersService.createUser(email, result, name, role);
    const token = this.jwtService.sign({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return { user, token };
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
    const token = this.jwtService.sign({
      id: user.id,
      email: user.email,
      role: user.role,
    });
    return { user, token };
  }
}
