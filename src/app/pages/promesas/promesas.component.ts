import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   // this.getUsuarios();

   this.getUsuarios().then(usuarios=>{
     console.log(usuarios);
   })
    /*const promesa = new Promise((resolve, reject)=>{
      if(false){
        resolve('hola Mundo');
      }else{
        reject('Algo salio Mal');
      }
      
    });
    promesa.then((mensaje) => {
     console.log(mensaje);
   }).catch( error=>console.log( ' Error en mi persona',error));*/
  }


  getUsuarios(){

    return  new Promise( resolve=>{
       fetch('https://reqres.in/api/users')
    .then(resp => resp.json())
    .then(body=>resolve(body.data));
    })
    
    
   

  }
}
