import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shoppingproduct',
  templateUrl: './shoppingproduct.component.html',
  styleUrls: ['./shoppingproduct.component.css']
})
export class ShoppingproductComponent implements OnInit {
  imgUrl ="";
  @Input() productName: string;
  @Input() productPrice: number;
  @Input() productQuantity: number;
  constructor() { }

  ngOnInit() {
    this.imageUrl();
  }

  imageUrl(){
    this.imgUrl = "src/assets/images/"+this.productName+".jpg";
  }

}
