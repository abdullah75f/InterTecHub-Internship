import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body.email, body.name, body.password);
  }

  @Get()
  findAllUsers(@Query('email') email:string) {
    return this.usersService.find(email);
  }
}
