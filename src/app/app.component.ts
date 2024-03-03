import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import vehicleData from '../assets/data/model-cart-data.json'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'BMW-Front-End-Test';
  
  // cars: Car[] = vehicleData

  public carDetails: any= [];

  public constructor(private http: HttpClient){}

  public ngOnInit(): void {
    const url = '/assets/data/model-cart-data.json';
    this.http.get(url).subscribe((res: any) => {
      this.carDetails = res;
      console.log("Car Data: ", this.carDetails)
    })
    
  }
  

  
}
