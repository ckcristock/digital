import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent  {

  albumes: any[]=[];
  imagenes: any[]=[];

  constructor( private api:ApiService) {
    this.api.obtenerAlbumes()
    .subscribe((albumsapi:any)=>{
      this.albumes=albumsapi;
      //console.log(albumsapi);
    });

    this.api.obtenerImagenes()
    .subscribe((imagenessapi:any)=>{
      this.imagenes=imagenessapi;
      console.log(imagenessapi);
    });

   }

 
}
