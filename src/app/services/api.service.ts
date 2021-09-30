import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor( private http: HttpClient) {
   }

   obtenerAlbumes(){
      return this.http.get('https://jsonplaceholder.typicode.com/albums');
   }

   obtenerUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
 }

 obtenerImagenes(){
  return this.http.get('https://jsonplaceholder.typicode.com/photos');
}

  buscarUsuarios(termino:string){
    let usuaArr:any[] = [];
    let usuarios2:any[] = [];
    termino = termino.toLowerCase();

    this.obtenerUsuarios()
    .subscribe((usuapi:any)=>{
      usuarios2=usuapi;

      for( let i = 0; i < usuarios2.length; i ++ ){

        let usuario = usuarios2[i];
  
  
        let nombre = usuario.name.toLowerCase();
  
        if( nombre.indexOf( termino ) >= 0  ){
          usuario.idx = i;
          usuaArr.push( usuario )

        }
  
      }
    });
    console.log("usuario encontrado");
    console.log(usuaArr);
    return usuaArr;

  }

}
