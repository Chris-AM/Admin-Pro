import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { retry,take, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit {
  constructor() {
   this.returnInterval().subscribe(console.log);
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
    return interval(1000)
            .pipe(
              take(4),
              map(value => value + 1)
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
}
