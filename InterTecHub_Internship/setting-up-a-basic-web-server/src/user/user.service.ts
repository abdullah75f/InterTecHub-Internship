import { Injectable } from '@nestjs/common';

@Injectable()
export class userService {
  getHome(): string {
    return 'Welcome to my home Page';
  }

  getName(): string {
    return 'Abdullah Farid';
  }

  getDream(): string {
    return 'I want to become a backend heavy web developer ';
  }

  getHobby(): { Hobby: string } {
    return {
      Hobby: 'Watching and playing Football',
    };
  }
}
