import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  // async signup(email: string, password: string) {
  //   const existingUser =
  // }
  // async login() {}
}
