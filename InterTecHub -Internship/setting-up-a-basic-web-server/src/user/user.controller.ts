import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('/name')
  getName() {}

  @Get()
  getHobby() {}

  @Get()
  getDream() {}
}
