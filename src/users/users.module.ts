import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserList } from "./usersList.service";
import { UsersControllers } from "./users.controllers";

@Module({
    providers: [UsersService, UserList],
    controllers: [UsersControllers],
})
export class UsersModule {}