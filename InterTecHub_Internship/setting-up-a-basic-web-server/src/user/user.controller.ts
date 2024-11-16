import { Controller, Get } from '@nestjs/common';
import { userService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: userService) {}
  @Get('/')
  getHome() {
    return this.userService.getHome();
  }
  @Get('/name')
  getName() {
    return this.userService.getName();
  }

  @Get('/hobby')
  getHobby(): { Hobby: string } {
    return this.userService.getHobby();
  }

  @Get('/dream')
  getDream(): string {
    return this.userService.getDream();
  }
}
