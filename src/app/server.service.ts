import {Headers, Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ServerService{

    constructor(private http: Http){}
    getProducts(){

        
        return this.http.get('https://reacttest-36e3e.firebaseio.com/'+'Products.json');
    }

    getUser(){
        return this.http.get('https://reacttest-36e3e.firebaseio.com/'+'Users.json');
    }

    getProduct(productName){
     
    
 
        return this.http.get('https://reacttest-36e3e.firebaseio.com/Products/'+productName+'.json');
    }

    putProduct(product){
        const header = new Headers({'Content-Type': 'application/json'})
        let current_product = 
        { 
            Nombre : product.Nombre,
            Precio: product.Precio,
            Cantidad : product.Cantidad,
            Archivo : product.Archivo
        }
        console.log("Trying to put the following product:");
        console.log(product);
        console.log('https://reacttest-36e3e.firebaseio.com/Products/'+current_product.Nombre+'.json')
        return this.http.put('https://reacttest-36e3e.firebaseio.com/Products/'+current_product.Nombre+'.json', current_product, {headers: header});
    }
}