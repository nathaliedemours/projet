import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachineComponent } from './component/machine/machine.component';
import { FormsModule } from '@angular/forms';
import { LivreComponent } from './component/livre/livre.component';
import { MachineServiceService } from './machine.service.service';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AppRenderComponent } from './app-render/app-render.component';
import { SingleMachineComponent } from './component/single-machine/single-machine.component';
import { ErrorNavigationComponent } from './component/error-navigation/error-navigation.component'; 
import { AuthGuardService} from './auth-guard.service';
import { AuthService } from './auth.service';




@NgModule({
  declarations: [
    AppComponent,
    MachineComponent,
    LivreComponent,
    AuthentificationComponent,
    AppRenderComponent,
    SingleMachineComponent,
    ErrorNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [
    MachineServiceService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
