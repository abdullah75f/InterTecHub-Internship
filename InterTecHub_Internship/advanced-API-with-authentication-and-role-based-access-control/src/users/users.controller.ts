import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    return this.authService.signup(
      body.email,
      body.password,
      body.name,
      body.role,
    );
  }

  @Post('/login')
  async login(@Body() body: Pick<CreateUserDto, 'email' | 'password'>) {
    return this.authService.login(body.email, body.password);
  }

  @Get('/user')
  findUser(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Get()
  findAllUsers() {
    return this.usersService.findAllUsers();
  }
}
