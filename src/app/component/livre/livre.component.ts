import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

   @Input() name : string
   @Input() type : string

  public livreListe = [
    {
      name: "livre 1",
      type: "roman"
    },
    {
      name: "livre 2",
      type: "BD"
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
