import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { retry,take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit, OnDestroy {

  public intervalSubscription: Subscription;
  
  constructor() {
   this.intervalSubscription =  this.returnInterval().subscribe(console.log);
  
    ////////////////////////////////////////
    ////////// Manual Observable ///////////
    ////////////////////////////////////////
    /* this.returnObservable()
      .pipe(retry())
      .subscribe(
      (value) => console.log('ticks', value),
      (error) => console.warn('error', error),
      () => console.info('Interval finished')
    ); */
  }

  ngOnInit(): void {}

  returnInterval(): Observable<number> {
    return interval(50)
            .pipe(
              //take(10),
              map(value => value + 1),
              filter(isPair => (isPair%2 === 0) ? true : false)
            );
  }

  returnObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>((observer) => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 8) {
          clearInterval(interval);
          observer.complete();
        } else if (i === 2) {
          observer.error('Observer is in position 2');
        }
      }, 1000);
    });
   
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe()
  }
}
