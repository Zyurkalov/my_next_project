import { Injectable } from "@nestjs/common";
import { User } from "./entity/user.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class UserList {
//   private residents = [
//     {
//       id: '1',
//       name: 'Sherlock Holmes',
//       email: 'smarty@221b.uk',
//     },
//     {
//       id: '2',
//       name: 'John H. Whatson',
//       email: 'doctor@221b.uk',
//     },
//     {
//       id: '3',
//       name: 'Mrs Hudson',
//       email: 'hostess@221b.uk',
//     },
// ];
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async getList() {
        return await this.userRepository.find()
    }
    async create(firstName, lastName, age): Promise<User> {
      const user = await this.userRepository.create({ firstName, lastName, age })
      return await this.userRepository.save(user);

    }
}

