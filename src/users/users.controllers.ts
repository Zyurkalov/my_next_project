import { Controller, Get, Post, Delete, Put, Headers, Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import { HeaderVersioningOptions } from "@nestjs/common/interfaces";

@Controller('users')
export class UsersControllers {
    constructor (private readonly usersService: UsersService) {}
    @Get()
    getUsers() {
        return this.usersService.findAll()
    }
    @Get(':id')
    getUserAtId() {
        return this.usersService.getUserAtId()
    }
        
    @Post()
    create(@Headers() headers): string {
        const userAget = headers['user-agent'];
        const contentType = headers['content-type'];

        return 'Это метод создания нового пользователя';
      }

    @Put()
    update(@Body() key?: string) {
        return key
    }
    // @Delete()
}