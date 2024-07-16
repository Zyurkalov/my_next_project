import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserList } from "./usersList.service";
import { UsersControllers } from "./users.controllers";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersService, UserList],
    controllers: [UsersControllers],
})
export class UsersModule {}