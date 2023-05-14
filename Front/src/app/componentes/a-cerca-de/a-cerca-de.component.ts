import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-a-cerca-de',
  templateUrl: './a-cerca-de.component.html',
  styleUrls: ['./a-cerca-de.component.css']
})
export class ACercaDeComponent implements OnInit {
  
  persona: Persona = new Persona("", "", "");

  constructor(public personaService: PersonaService){ }
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=> {this.persona = data})
  }

}
