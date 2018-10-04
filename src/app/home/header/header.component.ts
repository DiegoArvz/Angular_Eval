import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showCarCounter = false;
  counter = 0;
  constructor(private router: Router, private carService: CarService) { 
    this.carService.counterUpdated.subscribe(
      (status: number) => {
        this.counter = status;
        
        if(this.counter > 0){
        
          this.showCarCounter = true;
        }else{
          this.showCarCounter = false;
        }
      }
    )
  }

  ngOnInit() {
    this.showCarCounter = this.carService.car.length > 0;
    this.counter = this.carService.car.length;
  }

 

}
