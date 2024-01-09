
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [UserService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  user: any = [];

  constructor(private UserService: UserService) {}

  // on recupere les user
  ngOnInit(): void {
    this.UserService.getUser().subscribe((data) => {
      this.user = data;
    });
  }
}