import { Component, OnInit } from '@angular/core';
import { MachineServiceService } from 'src/app/machine.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet';

  public machinesListe : any[]

  constructor(private machineServiceService: MachineServiceService){
  }

  ngOnInit(): void {
    this.machinesListe = this.machineServiceService.machinesListe
  }

//     public namesList = [
//       "voiture verte",
//       "voiture bleue",
//       "voiture rouge"
//     ]

//     public voit1 : string = "voiture verte"
//     public voit2 : string = "voiture bleue"
//     public voit3 : string = "voiture rouge"

// public liv1 : string = "livre A"
// public liv2 : string = "livre B"
// public liv3 : string = "livre C"



}
