import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [
  ]
})
export class BreadcrumsComponent implements OnInit, OnDestroy {

  public title: string;
  public routeSubs$: Subscription;

  constructor(private router: Router) { 
    this.routeSubs$ = this.getRoute()
                      .subscribe(({title}) => {
                        this.title = title;
                        document.title = `Admin Pro - ${title}`;
                      });
  }

  ngOnInit(): void {
   
  }

  private getRoute(){ 
   return this.router.events
    .pipe(
      filter((event) => event instanceof ActivationEnd),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data));
  }
  ngOnDestroy(): void {
    this.routeSubs$.unsubscribe();
  }
}
