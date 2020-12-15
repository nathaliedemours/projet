import { Component, OnInit } from '@angular/core';
import { MachineServiceService } from 'src/app/machine.service.service';


@Component({
  selector: 'app-render',
  templateUrl: './app-render.component.html',
  styleUrls: ['./app-render.component.css']
})
export class AppRenderComponent implements OnInit {

    public machinesListe: any[]

    public isAuth:boolean = false

    constructor(private machineServiceService: MachineServiceService) {


     }

  ngOnInit(): void {
    this.machinesListe = this.machineServiceService.machinesListe
  }

}
