import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  findByEmail(name: string) {
    return `${name}.com`
  }
}
