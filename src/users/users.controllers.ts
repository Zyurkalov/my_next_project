import { Controller, Get, Post, Delete, Put, Headers, Body, Param, ParseIntPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HeaderVersioningOptions } from "@nestjs/common/interfaces";
import { User } from "./entity/user.entity";


@Controller('users')
export class UsersControllers {
    constructor (private readonly usersService: UsersService) {}
    @Get()
    getUsers() {
        return this.usersService.findAll()
    }
    @Get(':id')
    async getUserAtId(@Param('id', ParseIntPipe) id: number) {

        // return typeof(id)
        return await this.usersService.getUserAtId(id)
    }
        
    @Post()
    @ApiOperation({ summary: 'Create a new user' })
    @ApiBody({ 
        schema: {
          type: 'object',
          properties: {
            firstName: { type: 'string' },
            lastName: { type: 'string' },
            age: { type: 'number' }
          }
        }
      })
    create(@Body() body: {[key:string]: any}) {
        const { firstName, lastName, age } = body;
        return this.usersService.createUser(firstName, lastName, age)
      }

    @Put()
    update(@Body() body: {[key:string]: unknown}) {
        return body?.name
    }
    // @Delete(':id')
    // delete(@Param() id: string) {
    //     return this.usersService.deleteUserAtId(id)
    // }
}