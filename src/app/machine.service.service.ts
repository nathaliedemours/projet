import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MachineServiceService {

  public machinesListe = [
    {
      id: 1,
      name: "machine 1",
      type: "voiture",
      isRunning: false
    },
    {
      id: 2,
      name: "machine 2",
      type: "moto",
      isRunning: false
    },
    {
      
      id: 3,
      name: "machine 3",
      type: "vélo",
      isRunning: false
    }
  ]

  constructor() { }

  public getMachineById(id: number) {
    const machineTrouve = this.machinesListe.find(
      (machine) => {
        return machine.id === id
      }
    )
    return machineTrouve
  }

  public switchOnAllMachines(): void{
   
    for (let machine of this.machinesListe){
      machine.isRunning = true
    }

  }

  public switchOffAllMachines(): void{
   
    for (let machine of this.machinesListe){
      machine.isRunning = false
    }
  }

  public switchOne(i: number) {
    this.machinesListe[i].isRunning = !this.machinesListe[i].isRunning
  //   if(this.machinesListe[i].isRunning)
  //     this.machinesListe[i].isRunning =false
  // } else {
  //   this.machinesListe[i].isRunning = true
  }

  public switchOnOne(i: number) : void{
    this.machinesListe[i].isRunning = true

  }

  public switchOffOne(i: number) : void{
    this.machinesListe[i].isRunning = false
  }
}

