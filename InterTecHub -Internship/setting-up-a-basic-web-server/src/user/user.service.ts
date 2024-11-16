import { Injectable } from '@nestjs/common';

@Injectable()
export class userService {
  getName(): string {
    return 'Abdullah Farid';
  }

  getDream() {}

  getHobby() {}
}
