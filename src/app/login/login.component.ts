import { Component } from "@angular/core";
import { ServerService } from "../server.service";
import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl:'./login.component.html'
})
export class LoginComponent {

    email_input= "";
    password_input = "";
    show_error_message = false;
    constructor(private serverService: ServerService, private router: Router) { }

    uploadForm(){
        if(this.email_input === "" && this.password_input === ""){
            alert("Llene la forma para ingresar");
            return;
        }
        if(this.email_input === ""){
            alert("Inserte el correo")
            return;
        }
        if(this.password_input === ""){
            alert("Inserte la contraseña")
            return;
        }

        let user = {
            User: this.email_input,
            Password: this.password_input
        }

    this.serverService.getUser()
      .subscribe(
        (response)=>{
          const data = response.json();
          for(var key in data){
     
            if(data[key].User === user.User && data[key].Password === user.Password){
                this.router.navigate(['/home']);
                return;
            }
          }
          this.show_error_message=true;

        },
        (error)=> {console.log(error)}
      );



    }

}