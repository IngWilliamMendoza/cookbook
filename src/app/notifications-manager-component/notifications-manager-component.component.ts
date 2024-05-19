import { Component, OnInit } from '@angular/core';
import { first, Observable, Observer } from 'rxjs';
import { NotificationService } from '../services/notification-service.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-notifications-manager-component',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './notifications-manager-component.component.html',
  styleUrl: './notifications-manager-component.component.scss'
})
export class NotificationsManagerComponent implements OnInit {
  notificationsCount$: Observable<number>;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationsCount$ = this.notificationService.count$;
  }

  getCountValue(callback: (count: number) => void) {
    this.notificationsCount$.pipe(first()).subscribe(callback);
  }

  addNotification() {
    this.getCountValue((count: number) => {
      this.notificationService.setCount(++count);
    });
  }

  removeNotification() {
    
    this.getCountValue((count: number) => {
      if (count === 0) {
        return;
      }
      this.notificationService.setCount(--count);
    });
  }

  resetNotifications() {
    this.notificationService.setCount(0);
  }

}
