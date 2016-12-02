import {Users} from '../../../both/collections/users.collection';
import {Accounts} from 'meteor/accounts-base';

export class Main {
  start(): void {
    if (Users.collection.find().count()) return;
  }
}
