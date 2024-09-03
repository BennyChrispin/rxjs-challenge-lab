import { Component, OnInit } from '@angular/core';
import { of, from, interval, Observable, concat } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-challenge',
  templateUrl: './rxjs-challenge.component.html',
  styleUrls: ['./rxjs-challenge.component.css'],
})
export class RxjsChallengeComponent implements OnInit {
  ngOnInit(): void {
    const numbers$ = of(1, 2, 3, 4, 5);
    numbers$.subscribe({
      next: (value: number) => console.log('of Observable emitted:', value),
      complete: () => console.log('of Observable completed'),
    });

    const favoriteColors = ['Red', 'Green', 'Blue', 'Yellow'];
    const colors$ = from(favoriteColors);
    colors$.subscribe({
      next: (color: string) => console.log('from Observable emitted:', color),
      complete: () => console.log('from Observable completed'),
    });

    const interval$ = interval(1000).pipe(take(5));
    interval$.subscribe({
      next: (value: number) =>
        console.log('interval Observable emitted:', value, 'at', new Date()),
      complete: () => console.log('interval Observable completed'),
    });
    const combined$ = concat(numbers$, colors$);
    combined$.subscribe({
      next: (value: number | string) =>
        console.log('combined Observable emitted:', value),
      complete: () => console.log('combined Observable completed'),
    });

    const error$ = new Observable<string>((observer) => {
      observer.next('Value 1');
      observer.next('Value 2');
      observer.error('An error occurred!');
    });

    error$.subscribe({
      next: (value: string) => console.log('error Observable emitted:', value),
      error: (err: any) =>
        console.log('error Observable encountered an error:', err),
      complete: () => console.log('error Observable completed'),
    });
  }
}
