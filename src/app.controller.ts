import { Body, Controller, Get, Post, UseFilters, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { UserAlreadyExistsException } from './exceptions/user-exists.exception';
import { UserAlreadyExistsExceptionFilter } from './exceptions/user-exists.exception-filter';
import { LoggingInterceptor } from './interceptors/loggin.interceptors';
import { FormatInterceptor } from './interceptors/format.interceptors';

@Controller()
@UseInterceptors(LoggingInterceptor, FormatInterceptor)
@UseFilters(UserAlreadyExistsExceptionFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  async create(@Body('email') email: string) {
    if(await this.appService.findByEmail(email)) {
      throw new UserAlreadyExistsException()
    }
    // здесь логика добавления пользователя
  }
}
