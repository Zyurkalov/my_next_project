import { Injectable, NotFoundException } from "@nestjs/common";
import { UserList } from "./usersList.service";
import { User } from "./entity/user.entity";

@Injectable()
export class UsersService {
    constructor(private userList:  UserList) {}

    async findAll() {
        return this.userList.getList()
    }
    async getUserAtId(id: number) {
        const userList = await this.userList.getList();
        return userList.find(user => user.id === id);
    }
    async createUser(firstName, lastName, age): Promise<User> {
        return this.userList.create( firstName, lastName, age )
    }
    // async deleteUserAtId(targetId) {
    //     (await this.userList.getList()).splice(await this.findUserIndex(targetId), 1)
    // }
    // private async findUserIndex(targetId) {
    //     const userIndex =  (await this.userList.getList()).findIndex(({id}) => id === targetId)

    //     if(userIndex === -1) {
    //         throw new NotFoundException(`ползователь ${targetId} - отсуствует`)
    //     }
    //     return userIndex
    // }
}