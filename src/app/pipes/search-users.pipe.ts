import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../users/user.class';

@Pipe({
  name: 'searchUsers'
})
export class SearchUsersPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string): User[] {
    if (searchCriteria === '') {
      return users;
    }
    const searchedUsers: User[] = [];
    for (const user of users) {
      if (user.UserName.toUpperCase().includes(searchCriteria.toUpperCase()) ||
        user.FirstName.toUpperCase().includes(searchCriteria.toUpperCase()) ||
        user.LastName.toUpperCase().includes(searchCriteria.toUpperCase()) ||
        user.Phone.toUpperCase().includes(searchCriteria.toUpperCase()) ||
        user.Email.toUpperCase().includes(searchCriteria.toUpperCase())) {
        searchedUsers.push(user);
      }
    }
    return searchedUsers;
  }

}
