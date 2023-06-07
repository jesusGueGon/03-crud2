import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  public users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.users = [...this.userService.users];
  }


  get allUsersService() {
    return this.userService.allUsers;
  }

  redirectId(userId: string) {
    this.router.navigate(['/crud/edit', userId]);
  }

  // setUser(userEnviar: User) {
  //   this.userService.setUser(userEnviar);
  // }

}
