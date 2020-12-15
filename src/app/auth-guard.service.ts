import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    // utiliser l'asynchrone, on lui fournit le type de données qu'il va recevoir sans encore l'avoir, donc il continue et affichera 
    // les données quand il les aura. Evite que l'appli soit bloquée . la promesse renvoie les données qd il les a, appel unique. observable, recoit les
    // infos qd il les a comme la promesse mais n'est pas unique car qd il y a les maj il les traite / boolean seul car peut  être en synchrone
  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuth) {
      console.log('jai le droit')
      return true
    } else {
      this.router.navigate(['auth'])

    }
  
 
  }
   

  constructor(private authService: AuthService, private router: Router) { }
}
