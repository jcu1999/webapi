import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.usersvc.get(this.route.snapshot.params.id).subscribe(jsonresp => {
      console.log(jsonresp);
      this.user = jsonresp.data;
    });
  }

}
