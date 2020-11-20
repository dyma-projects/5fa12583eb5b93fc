import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {

  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor() { }

  addUser(name: string) {
    this.users.value.push(name);

    //Variante en utilisant un observer :
    //this.users.next(this.users.value);
  }
}
