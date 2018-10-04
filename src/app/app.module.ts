import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { CatalogoComponent } from './home/catalogo/catalogo.component';
import { CarritoComponent } from './home/carrito/carrito.component';
import { LargeproductComponent } from './home/largeproduct/largeproduct.component';
import { SmallproductComponent } from './home/catalogo/smallproduct/smallproduct.component';
import { ShoppingproductComponent } from './home/carrito/shoppingproduct/shoppingproduct.component';

import {Routes, RouterModule} from '@angular/router'
import { ServerService } from './server.service';
import { CarService } from './car.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, children:[
    { path: '', component: CatalogoComponent},
    { path: 'carrito', component: CarritoComponent},
    { path: ':id', component: LargeproductComponent}
  ]},
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    CatalogoComponent,
    CarritoComponent,
    LargeproductComponent,
    SmallproductComponent,
    ShoppingproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServerService, CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
