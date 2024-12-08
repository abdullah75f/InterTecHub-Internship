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

  // This End-point creates a new user, both as an admin and user but hashing its password and generating a jwt token
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    return this.authService.signup(
      body.email,
      body.password,
      body.name,
      body.role,
    );
  }
  // This End-point login a user, both as an admin and user by comparing the hashed password and supplied password and generating a jwt token
  @Post('/login')
  async login(@Body() body: Pick<CreateUserDto, 'email' | 'password'>) {
    return this.authService.login(body.email, body.password);
  }

  // This End-point gets a single user by providing its email as a query parameter
  @Get('/user')
  findUser(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  // This End-point gets all Users
  @Get()
  findAllUsers() {
    return this.usersService.findAllUsers();
  }
}
