import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from './../auth.service'

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  userStatus:boolean 
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userStatus = this.authService.isAuth
  } 

  public SignIn(){
    this.authService.signIn().then(
      () => {
        console.log('retour de la promesse')
        this.userStatus = this.authService.isAuth
        this.router.navigate(['machine'])
      }
    )
  }
  public SignOut(){
    this.authService.signOut();
    this.userStatus = this.authService.isAuth
  }
}
