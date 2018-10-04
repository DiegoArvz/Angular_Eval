import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  products = 
    [
 
    ]
  
  search ="";

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.onGetProducts();
  }

  onGetProducts(){
    this.serverService.getProducts()
      .subscribe(
        (response)=>{
          const data = response.json();
          let temp_products = [];
          for(var key in data){
            temp_products.push(data[key]);
          }
          this.products = temp_products;
        },
        (error)=> {console.log(error)}
      );
  }

  isInSearch(name){
    console.log(name.toLowerCase());
    console.log(this.search.toLowerCase());
    if(name.toLowerCase().includes(this.search.toLowerCase()) || this.search === ""){
      console.log("included")
      return true;
    }
    else {return false;
    }
  }
  

  

}
