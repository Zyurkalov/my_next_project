import { Injectable } from "@nestjs/common";


@Injectable()
export class UserList {
  private residents = [
    {
      id: '1',
      name: 'Sherlock Holmes',
      email: 'smarty@221b.uk',
    },
    {
      id: '2',
      name: 'John H. Whatson',
      email: 'doctor@221b.uk',
    },
    {
      id: '3',
      name: 'Mrs Hudson',
      email: 'hostess@221b.uk',
    },
];
    constructor() {}

    getList() {
        return this.residents
    }
}

