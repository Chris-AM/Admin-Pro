import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   this.getUsers()
    .then((data) => {
      console.log('The best way to use fetch: returning a promise and consuming it elsewhere --->', data)
    });
    //this.learningPromises();
  }
  
  /* private learningPromises(){
    const promise = new Promise((response, reject)=>{
      //res('THIS IS NOT A PROMISE')
      if(false){
        response('Now it is a promise in response');
      }else{
        reject('Now a promise but in reject')
      }
    });
    promise
    .then((message) => {
      console.log('THEN, when the promise is responsed.', message);
    })
    .catch((error) => {
      console.log('CATCH, when the promise is rejected.', error);
    })
     console.log('Learning Promises last console log');
  } */

  getUsers(){
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/Users')
        .then( response => response.json())
        .then( body => resolve(body.data));
    });
    ///////////////////////////////////////////////////
    ///////// THIS IS OLD WAY TO USE PROMISES /////////
    ///////////////////////////////////////////////////
   /*  fetch('https://reqres.in/api/users')
    .then(
      response => {
        response
          .json()
          .then(
            body =>{
              console.log('THIS IS THE WORST WAY TO FETCH DATA', body)
            }
          )
        console.log('this is my data --->', response);
      }
    )
  } */
  }
}
