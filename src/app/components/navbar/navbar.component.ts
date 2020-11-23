import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public token: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.checkToken();
  }

  checkToken(): void {
    this.token = this.authService.token;
  }

  logout(): void {
    this.authService.logout().subscribe(res => {
      this.router.navigate(['/home']).then();
    });
  }

}
