import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isRegisterClicked = false;
  signupUsers: any[] = [];
  signupObj: any = {
    email:'',
    password:''
  }
  loginObj: any ={
    email: '',
    password:''
  }

  
  constructor(private router: Router) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null) {
      this.signupUsers = JSON.parse(localData)
    }
  }
  login() {
    debugger
    // ✅ Add real authentication logic here (e.g., call API)
      const isUserExist = this.signupUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password) ;
      if(isUserExist != undefined){
        alert('User Login Successfully')
         // Simulate successful login
    localStorage.setItem('loggedIn', 'true');

    // Navigate to dashboard
    this.router.navigate(['/dashboard']);
      }else{
        alert('Wrong user')
      }
   
  }

 toggle(){
  this.isRegisterClicked = !this.isRegisterClicked;
 }
 register(){
  this.signupUsers.push(this.signupObj);
  localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj = {
    email:'',
    password:''
  }
 }
}
