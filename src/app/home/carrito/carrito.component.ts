import { Component, OnInit } from '@angular/core';
import { CarService } from '../../car.service';
import { ServerService } from '../../server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  car = [

  ]
  responses = 0;
  total = 0;

  constructor(private carService: CarService, private serverService: ServerService, private router: Router) { }

  ngOnInit() {
    this.onGetShoppingCar();
    this.total = this.carService.total;
  }

  onGetShoppingCar(){
    this.car = this.carService.car;
  }

  onToPay(){
    console.log("on paying")
    let database_products;
    
    this.serverService.getProducts()
      .subscribe(
        (response)=>{
          const data = response.json();
          let temp_products = [];
          for(var key in data){
            temp_products.push(data[key]);
          }
          database_products = temp_products;
          console.log(database_products)
          let shoppingCar = this.car;
          console.log(shoppingCar);
          var difference = [];
          for(var key in database_products){
              var prod = database_products[key];
              console.log(prod);
              for(var key_nd in shoppingCar){
                  console.log(prod.Nombre)
                  console.log(shoppingCar[key_nd].Nombre[0]);
                  if(prod.Nombre === shoppingCar[key_nd].Nombre[0]){
                      
                      var database_items = prod.Cantidad;
                      var carrito_items = shoppingCar[key_nd].Cantidad;
                      var difference_cantidad = database_items - carrito_items;
                      var prod_object = {
                          Nombre: prod.Nombre,
                          Cantidad: difference_cantidad,
                          Precio: prod.Precio,
                          Archivo: prod.Nombre.toLowerCase()+".jpg"
                      }
                      difference.push(prod_object);
                      break;
                  }
              }
          }

          for(var key in difference){
            this.serverService.putProduct(difference[key])
            .subscribe(
              (response)=>{
                console.log(response);
                this.responses++;
                if(this.responses === this.car.length){
                  alert("Gracias por su compra");
                  this.carService.deleteCar();
                  this.router.navigate(['/home/']);
                }
              }
            )
          }
      //    this.carService.deleteCar();
         
        },
        (error)=> {console.log(error)});
    }
  }



