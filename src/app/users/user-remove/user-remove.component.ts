import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-remove',
  templateUrl: './user-remove.component.html',
  styleUrls: ['./user-remove.component.css']
})
export class UserRemoveComponent implements OnInit {

  user: User;

  delete(): void {
    this.usersvc.remove(this.user).subscribe(jsonresp => {
      console.log(jsonresp);
      if (jsonresp.rc === 200) {
        this.router.navigateByUrl('/users/list');
      }
    });
  }

  constructor(private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.usersvc.get(this.route.snapshot.params.id).subscribe(jsonresp => {
      console.log(jsonresp);
      this.user = jsonresp.data;
    });
  }
}
