import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationsButtonComponent } from './notifications-button-component/notifications-button-component.component';
import { NotificationsManagerComponent } from './notifications-manager-component/notifications-manager-component.component';
import { VersionControlComponent } from './cc-ng-on-changes/version-control/version-control.component';
// import { VersionControlComponent } from './cc-setters/version-control/version-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NotificationsManagerComponent, 
    NotificationsButtonComponent, 
    VersionControlComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cookbook';
}
