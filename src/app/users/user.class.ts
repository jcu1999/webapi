import { UUID } from 'angular2-uuid';

export class User {
    Id: string;
    UserName: string;
    Password: string;
    FirstName: string;
    LastName: string;
    Phone: string;
    Email: string;
    IsReviewer: boolean;
    IsAdmin: boolean;

    constructor() {
        this.Id = UUID.UUID();
        this.IsReviewer = false;
        this.IsAdmin = false;
    }
}
