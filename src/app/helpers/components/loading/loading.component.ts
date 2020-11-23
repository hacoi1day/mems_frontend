import { Component, OnInit } from '@angular/core';
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  public isShow: boolean = false;

  constructor(
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.loadingService.get().subscribe(isShow => {
      this.isShow = isShow;
    })
  }

}
