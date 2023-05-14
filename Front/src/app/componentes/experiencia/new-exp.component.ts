import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExpServiceService } from 'src/app/servicios/exp-service.service';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent implements OnInit {
  nombreE: string= "";
  descripcionE: string= "";

  constructor(private expService: ExpServiceService, private router: Router){}
  
  ngOnInit(): void {
    
  }

  onCreate(): void{
    const experiencia = new Experiencia(this.nombreE, this.descripcionE);
    this.expService.save(experiencia).subscribe(data=>{
      alert("Experiencia agregada");
      this.router.navigate(['']);
    }, err=> {
      alert("Fallo el metodo");
      this.router.navigate(['']);
    }
    )
  }

  cancelar(){
    this.router.navigate([''])
  }

}
