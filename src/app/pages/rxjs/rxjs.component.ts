import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable ,interval, Subscription} from 'rxjs';
import {retry,take,map ,filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {
 intervalSubs: Subscription;
  constructor() { 
    
   

    
    /*this.retornaObservable().pipe(
      retry(2)
    ).subscribe( 
      valor =>console.log('Subs:', valor),
      error=> console.warn('Error:',error),
      ()=> console.info('Obs terminado')
    
    );*/

    this.intervalSubs =this.retornaIntervalo().subscribe(console.log);
  }
retornaIntervalo(){

  const intervalo$ = interval(500)
  .pipe(
   
    map(valor=> {
      return valor +1;
    }),
    filter(valor=>(valor % 2 === 0) ? true : false )
     ,//take(10),
  );

  return intervalo$;


}
 retornaObservable():Observable<number> {
  
      let i = -1;
     return new Observable<number>( observer=>{
      
      const intervalo=  setInterval(()=>{
        i++;
        observer.next(i);
         
        if(i ===4){
          clearInterval(intervalo);
          observer.complete();
   
        }
        if(i ===2){
          observer.error('I llego al valor de dos');
        }
   
       }, 1000);
   
       });
       

    };
  

  ngOnInit(): void {
    


}

ngOnDestroy(){
  this.intervalSubs.unsubscribe();
}

}