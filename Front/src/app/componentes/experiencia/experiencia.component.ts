import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExpServiceService } from 'src/app/servicios/exp-service.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[] = [];

  constructor(private expService: ExpServiceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExp();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else { this.isLogged = false; }

  }

  cargarExp(): void {
    this.expService.lista().subscribe(data => { this.experiencia = data});
  }

delete(id?: number){

  if(confirm("¿Seguro quiere eliminar la experiencia?")){
    if(id != undefined){
      this.expService.delete(id).subscribe(
        data =>{
          this.cargarExp();
        }, err =>{
          alert("No se puedo borrar  la experiencia");
        }
      )
    }
  }
}

}


