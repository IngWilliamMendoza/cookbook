import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private count: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  count$ = this.count.asObservable();

  constructor() { }

  setCount(countValue: number) {
    this.count.next(countValue);
  }

}
