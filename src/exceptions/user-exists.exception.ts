import {HttpException, HttpStatus} from '@nestjs/common'

export class UserAlreadyExistsException extends HttpException {
    constructor() {
       super('Пользовател уже существует', HttpStatus.BAD_REQUEST) 
    }

}