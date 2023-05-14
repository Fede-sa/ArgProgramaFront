import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExpServiceService } from 'src/app/servicios/exp-service.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {
  explab: Experiencia = null;


  constructor(private expService: ExpServiceService, private activatedRoute: ActivatedRoute, private router: Router) {}
  
  
  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.params['id'];
    this.expService.detail(id).subscribe(
      data =>{
        this.explab = data;
      }, err=>{
        alert("Error al actualizar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expService.update(id, this.explab).subscribe(data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al actualizar experiencia");
        this.router.navigate(['']);
      }
    )
    alert("Experiencia actualizada")
  }

  cancelar(){
    this.router.navigate([''])
  }

}
