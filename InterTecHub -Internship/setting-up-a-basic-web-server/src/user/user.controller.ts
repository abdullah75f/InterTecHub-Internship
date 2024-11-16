import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
  @Get('/name')
  getName() {}

  @Get('/dream')
  getHobby() {}

  @Get('/dream')
  getDream() {}
}
