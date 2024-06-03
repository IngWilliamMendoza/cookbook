import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { NotificationService } from '../../../services/notification-service.service';

@Component({
  selector: 'app-notifications-button-component',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './notifications-button-component.component.html',
  styleUrl: './notifications-button-component.component.scss'
})
export class NotificationsButtonComponent implements OnInit{
  notificationsCount$: Observable<number>;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationsCount$ = this.notificationService.count$;
  }
}
