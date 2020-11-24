import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";
import {LoadingService} from "../../helpers/services/loading.service";
import {TokenService} from "../../auth/services/token.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public token: unknown = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingService: LoadingService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.tokenService.getToken().subscribe(token => {
      this.token = token;
    });
  }

  logout(): void {
    this.loadingService.show();
    this.authService.logout().subscribe(res => {
      this.tokenService.removeToken();
      this.router.navigate(['/home']).then(() => {
        this.loadingService.hide();
      });
    })
  }

}
