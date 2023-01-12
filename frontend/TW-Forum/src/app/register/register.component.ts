import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }

  email:string=""
  username:string=""
  name:string=""
  password:string=""

  ngOnInit(): void {
  }

  register(){
    let data={"email":this.email,"username":this.username,"name":this.name,"password":this.password}
    this.authenticationService.register(data).subscribe()
    this.authenticationService.login(this.username,this.password).subscribe({
      next:data=>{
        localStorage.setItem("token",data.token)
        window.location.reload()
      },
      error:error=>{
        console.log('There was an error authenticating',error)
      }
    })

  }

}
