import { Controller, Get, Post, Delete, Put, Headers, Body, Param } from "@nestjs/common";
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
    getUserAtId(@Param() id: string) {
        return this.usersService.getUserAtId(id)
    }
        
    @Post()
    create(@Body() body) {
        return this.usersService.createUser(body)
      }

    @Put()
    update(@Body() body: {[key:string]: unknown}) {
        return body?.name
    }
    @Delete(':id')
    delete(@Param() id: string) {
        return this.usersService.deleteUserAtId(id)
    }
}