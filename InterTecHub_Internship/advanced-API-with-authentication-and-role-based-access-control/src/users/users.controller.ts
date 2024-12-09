import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import {
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  // This End-point creates a new user, both as an admin and user but hashing its password and generating a jwt token
  @Post('/signup')
  @ApiOperation({ summary: 'Sign up a new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'User has been successfully created.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid data provided.',
  })
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
  @ApiOperation({ summary: 'Login a user and get a JWT token' })
  @ApiBody({
    type: CreateUserDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Login successful, JWT token returned.',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid credentials.',
  })
  async login(@Body() body: Pick<CreateUserDto, 'email' | 'password'>) {
    return this.authService.login(body.email, body.password);
  }

  // This End-point gets a single user by providing its email as a query parameter
  @Get('/user')
  @ApiOperation({ summary: 'Get a user by email' })
  @ApiQuery({
    name: 'email',
    type: 'string',
    description: 'Email of the user to find.',
  })
  @ApiResponse({
    status: 200,
    description: 'User found.',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found.',
  })
  findUser(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  // This End-point gets all Users
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'List of all users returned.',
  })
  findAllUsers() {
    return this.usersService.findAllUsers();
  }
}
