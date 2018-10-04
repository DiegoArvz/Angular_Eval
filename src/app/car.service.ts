import { Http } from "@angular/http";
import { EventEmitter, Injectable } from "@angular/core";


@Injectable()
export class CarService{
    total = 0;
    counter = 0;
    car = [];
    
    counterUpdated = new EventEmitter<number>();

    constructor(private http: Http){}
    setProducts(){
        return this.http.get('https://reacttest-36e3e.firebaseio.com/'+'Products.json');
    }

    deleteCar(){
        this.car = [];
        this.counter = this.car.length;
        this.onCounterUpdated(this.counter);
    }

    addToCar (product){
        product.Precio = product.Precio * product.Cantidad;
        var temp_total = this.total + parseInt(product.Precio);
        this.total = temp_total;
        var found = false;
        if(this.car.length > 0){
            for(var key in this.car){
                console.log(this.car[key].Nombre[0]);
                if(this.car[key].Nombre[0] === product.Nombre[0]){
                    console.log(this.car[key].Nombre[0]);
                    this.car[key].Cantidad = 
                        parseInt(this.car[key].Cantidad)+
                        parseInt(product.Cantidad);
                        this.car[key].Precio = 
                        parseInt(this.car[key].Precio)+
                        (parseInt(product.Precio));
                    found = true;
                    break;
                }
            }
            if(!found){
                this.car.push(product);
             
            }
        }
        else{
            this.car.push(product);
            

        }

        console.log(this.car);
        
        this.counter = this.car.length;
        this.onCounterUpdated(this.counter);
        alert("Se añadio: "+product.Cantidad+" "+product.Nombre+"(s)"+" al carrito");
    }

   onCounterUpdated(number){
    this.counterUpdated.emit(number);
   }
}