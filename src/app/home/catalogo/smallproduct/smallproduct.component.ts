import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../../../car.service';

@Component({
  selector: 'app-smallproduct',
  templateUrl: './smallproduct.component.html',
  styleUrls: ['./smallproduct.component.css']
})
export class SmallproductComponent implements OnInit {
  name = 'Aguacate';
  price = 0;
  counter = 1;
  imgUrl ="";
  @Input() productName: string;
  @Input() productPrice: number;
  @Input() productQuantity: number;
  @Input() isInSearch: boolean;

  constructor(private router: Router, private carService: CarService) {
      
   }

  ngOnInit() {
    this.imageUrl();
    this.name = this.productName;
    this.price = this.productPrice;
    
  }

  onAddToCar(){
    let product = {
      Nombre: this.productName,
      Cantidad: this.counter,
      Precio: this.productPrice
    };
    console.log("Se intentará añadir el siguiente producto:");
    console.log(product);
    this.carService.addToCar(product);
  }

  onUpdateCounterProduct(event: Event){
    this.counter = parseInt((<HTMLInputElement>event.target).value);
  }

  onLoadLargeView(){
    this.router.navigate(['/home/'+this.productName]);
  }

  imageUrl(){
    this.imgUrl = "src/assets/images/"+this.productName+".jpg";
  }

}
