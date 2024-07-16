import { Injectable, NotFoundException } from "@nestjs/common";
import { UserList } from "./usersList.service";

@Injectable()
export class UsersService {
    constructor(private userList:  UserList) {}

    findAll() {
        return this.userList.getList()
    }
    getUserAtId({id} : any) {
        return this.userList.getList()[id -1]
        // return this.userList.getList()[this.findUserIndex(targetId)]
    }
    createUser(newUser) {
        const user = {
            id: String( this.userList.getList().length),
            ...newUser
        }
        this.userList.getList().push(user)
        // return this.userList.getList()[this.userList.getList().length]
        return user
    }
    deleteUserAtId(targetId) {
        this.userList.getList().splice(this.findUserIndex(targetId), 1)
    }
    private findUserIndex(targetId) {
        const userIndex =  this.userList.getList().findIndex(({id}) => id === targetId)

        if(userIndex === -1) {
            throw new NotFoundException(`ползователь ${targetId} - отсуствует`)
        }
        return userIndex
    }
}