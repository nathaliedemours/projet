import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MachineServiceService } from 'src/app/machine.service.service';


@Component({
  selector: 'app-single-machine',
  templateUrl: './single-machine.component.html',
  styleUrls: ['./single-machine.component.css']
})
export class SingleMachineComponent implements OnInit {
  public name: string
  public type: string
  public isRunning: boolean

  constructor(private machineServiceService: MachineServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    const machine = this.machineServiceService.getMachineById(+id)
    //un ? permet de vérifier si une variable n'est pas nulle
    this.name = machine.name
    this.type = machine.type
    this.isRunning = machine.isRunning
  }

}
