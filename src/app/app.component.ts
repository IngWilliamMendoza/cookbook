import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SocialCardType } from './constants/social-card-type';
import { CommonModule } from '@angular/common';
import { SocialCardComponent } from './components/components-comuncation/dynamic-component/social-card/social-card.component';
import { ApparenceDirectiveComponent } from './components/directivex/apparence-directive/apparence-directive.component';
import { NotificationsManagerComponent } from './components/components-comuncation/notifications-manager-component/notifications-manager-component.component';
import { NotificationsButtonComponent } from './components/components-comuncation/notifications-button-component/notifications-button-component.component';
import { VersionControlComponent } from './components/components-comuncation/cc-ng-on-changes/version-control/version-control.component';
import { GalleryComponent } from './components/components-comuncation/gallery/gallery.component';
import { ReadTimeComponent } from "./components/directivex/read-time/read-time.component";
import { VerticalScrollComponent } from './components/directivex/vertical-scroll/vertical-scroll.component';
import { IfNotDirectiveComponent } from './components/directivex/if-not-directive/if-not-directive.component';
import { MultiStructuralDirectivesComponent } from "./components/directivex/multi-structural-directives/multi-structural-directives.component";
import { EnhancedTemplateTypeCheckingComponent } from './components/directivex/enhanced-template-type-checking/enhanced-template-type-checking.component';
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
    SocialCardComponent,
    ApparenceDirectiveComponent,
    ReadTimeComponent,
    VerticalScrollComponent,
    IfNotDirectiveComponent,
    MultiStructuralDirectivesComponent,
    EnhancedTemplateTypeCheckingComponent
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

  // selectedCardType: SocialCardType;
  // cardTypes = SocialCardType;

  // setCardType(type: SocialCardType) {
  //   this.selectedCardType = type;
  //   console.log('Selected card type:', SocialCardType[type]);
  // }


}
