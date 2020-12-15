import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ErrorNavigationComponent } from './component/error-navigation/error-navigation.component';
import { MachineComponent } from './component/machine/machine.component';
import { SingleMachineComponent } from './component/single-machine/single-machine.component'

import { AuthGuardService} from './auth-guard.service'


const routes: Routes = [
 
    {
      
      path: 'auth', component: AuthentificationComponent
    },
    {
      //canActivate, on autorise l'accès à véhicule seulement à la connexion, interdit si pas connecté
      path: 'machine', canActivate: [AuthGuardService], component: MachineComponent
    },
    {
      path: 'machine/:id', component: SingleMachineComponent
    },
    {
      path: '', component: AuthentificationComponent
    },
    {
      path: 'notfound', component: ErrorNavigationComponent
    },
    {
      path: '**', redirectTo: 'notfound'
    }
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
