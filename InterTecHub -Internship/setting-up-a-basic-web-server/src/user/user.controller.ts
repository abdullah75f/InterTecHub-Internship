import { Controller, Get } from '@nestjs/common';
import { userService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: userService) {}
  @Get('/name')
  getName() {
    return this.userService.getName();
  }

  @Get('/dream')
  getHobby() {}

  @Get('/dream')
  getDream() {}
}
