import { Component, Input, OnInit } from '@angular/core';
import { MachineServiceService } from 'src/app/machine.service.service';


@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {

    @Input() name : string
    @Input() type : string
    @Input() isRunning : boolean
    @Input() index : number
    public i: boolean

    
    public machinesListe : any[]

  // public machineListe = [
  //   {
  //     name: "machine 1",
  //     type: "voiture",
  //     dateSortie: new Date()
  //     },
  //   {
  //     name: "machine 2",
  //     type: "moto",
  //     dateSortie: new Date()
  //   }
  // ]

  // public getColor(){
  //   if (this.name === "voiture bleue"){
  //     return "blue"
  //   }
  //   return "green"
  // }

  public isIndex(index: Number):boolean{
    return index == 1
  }



 // creer une variable de desactivation du bouton 
    // public desactivate: boolean = true

    // public isActivated(): boolean {
    //   return false
    // } 



    // public auClic(text: string): void {
    //   console.log ("un clic sur le bouton " + text);
    // }
   
    // public myType(): string{
    //   return this.type
    // }

   

  constructor(private machineServiceService: MachineServiceService) {
  //   setTimeout(
  //   () =>  {
  //     this.desactivate = false
  //   }, 5000   
  //   )
  }

  ngOnInit(): void {
    this.machinesListe = this.machineServiceService.machinesListe
  }
  // correspond au bouton, envoi l'info au service machine service
  public switchOne(){
    this.machineServiceService.switchOne(this.index);
  }

  public allOn(): void{
    this.machineServiceService.switchOnAllMachines()
  }

  public allOff(): void{
    if(confirm('tout éteindre ?')){
    this.machineServiceService.switchOffAllMachines()
  }
}
}
