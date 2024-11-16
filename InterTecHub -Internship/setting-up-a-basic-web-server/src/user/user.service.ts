import { Injectable } from '@nestjs/common';

@Injectable()
export class userService {
  getName(): string {
    return 'Abdullah Farid';
  }

  getDream() {}

  getHobby(): { Hobby: string } {
    return {
      Hobby: 'Watching and playing Football',
    };
  }
}
