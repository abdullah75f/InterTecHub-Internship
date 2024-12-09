import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '👋 Hello InterTecHub, \n\n🎉 Task-3 is completed, \n\n✨ Enjoy! ✨';
  }
}
