import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-largeproduct',
  templateUrl: './largeproduct.component.html',
  styleUrls: ['./largeproduct.component.css']
})
export class LargeproductComponent implements OnInit {
  title = "Temp title";
  quantity = "Temp qunatity";
  price = "Temp price";
  imgUrl = "";
    constructor(private router: Router, 
              private route: ActivatedRoute, 
              private serverService: ServerService) {

  }

  ngOnInit() {
    this.title = this.route.snapshot.params['id'];
    this.imageUrl();
    console.log(this.imgUrl);
    this.onGetProduct();
  }

  imageUrl(){
    this.imgUrl = "src/assets/images/"+this.title.toLowerCase()+".jpg";
  }

  goBack(){
    this.router.navigate(['/home']);
  }

  onGetProduct(){
    this.serverService.getProduct(this.title)
      .subscribe(
        (response)=>{
          const data = response.json();
          console.log(data);
          this.title = data.Nombre;
          this.quantity = data.Cantidad;
          this.price = data.Precio;
        },
        (error)=> {console.log(error)}
      );
  }

}
