import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent {
  
  datos: any[]=[];
  variablen=0; //cero es que no hay publicación, 1 que si
  constructor() { }

  profileForm = new FormGroup({
    titulo: new FormControl('',[Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    autor: new FormControl('', [Validators.required]),
  });

  

  onSubmit() {
    // this.datos=this.profileForm.value; 
    this.datos.push( this.profileForm.value )
    this.variablen=1;
    this.profileForm.reset();
    // console.log("estos son mis datos");
    // console.log(this.datos);
  }

}
