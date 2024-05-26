import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationsButtonComponent } from './components/notifications-button-component/notifications-button-component.component';
import { NotificationsManagerComponent } from './components/notifications-manager-component/notifications-manager-component.component';
import { VersionControlComponent } from './components/cc-ng-on-changes/version-control/version-control.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SocialCardType } from './constants/social-card-type';
import { CommonModule } from '@angular/common';
import { SocialCardComponent } from './dynamic-component/social-card/social-card.component';
// import { VersionControlComponent } from './cc-setters/version-control/version-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    NotificationsManagerComponent, 
    NotificationsButtonComponent, 
    VersionControlComponent,
    GalleryComponent,
    SocialCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cookbook';

  @ViewChild(GalleryComponent) gallery: GalleryComponent;

  // addNewPicture(gallery: GalleryComponent) {
  //   gallery.pictures.unshift(gallery.generateImage());
  // }

  // removeFirstPicture(gallery: GalleryComponent) {
  //   gallery.pictures.shift();
  // }

  // addNewPicture() {
  //   this.gallery.pictures.unshift(this.gallery.generateImage());
  // }

  // removeFirstPicture() {
  //   this.gallery.pictures.shift();
  // }

  
  selectedCardType: SocialCardType;
  cardTypes = SocialCardType;

  setCardType(type: SocialCardType) {
    this.selectedCardType = type;
    console.log('Selected card type:', SocialCardType[type]);
  }

}
