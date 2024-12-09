import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '👋 Hello InterTecHub,\n\n🎉 Task-3 has been successfully completed!\n\n✨ Enjoy exploring the features! ✨\n\n📄 For more details, please refer to the README.md file.';
  }
}
