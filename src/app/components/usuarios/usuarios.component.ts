import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  usuarios: any[]=[];
  usuariosencontrados: any[]=[];
  variablem=0; //cero quiere decir q no ha hecho busqueda, 1 q si

  constructor( private api:ApiService) {
    this.api.obtenerUsuarios()
    .subscribe((usuapi:any)=>{
      this.usuarios=usuapi;
      console.log(usuapi);
    });
   }

   buscar(termino:string){
    
    this.usuariosencontrados=this.api.buscarUsuarios(termino);
    this.variablem=1;
  }

  cambiarvariablem(){
    if(this.variablem==0){
      this.variablem=1;
    } else {
      this.variablem=0;
    }
  }

}
