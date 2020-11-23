import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewChecked {

  public token: string = '';
  public user: object = {};

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.checkToken();
  }

  checkToken(): void {
    // let user = localStorage.getItem('user');
    // if (user) {
    //   this.user = JSON.parse(user);
    // }
  }

  logout(): void {
    this.authService.logout().subscribe(res => {
      this.router.navigate(['/home']).then();
    });
  }

  ngAfterViewChecked() {
    // this.checkToken();
  }

}
