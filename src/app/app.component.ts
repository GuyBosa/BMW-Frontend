import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'BMW-Front-End-Test';
  
  carDetails: any = [];

  public constructor(private appService: AppService){}

  public ngOnInit(): void {
    this.appService.getAllData().subscribe((data: any) => {
      this.carDetails = data;   
    });
    
  }
  

  
}
