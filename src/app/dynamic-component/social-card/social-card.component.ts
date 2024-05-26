import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { SocialCardType } from '../../constants/social-card-type';
import { CommonModule } from '@angular/common';
import { FbCardComponent } from '../fb-card/fb-card.component';
import { TwitterCardComponent } from '../twitter-card/twitter-card.component';

@Component({
  selector: 'app-social-card',
  standalone: true,
  imports: [
    CommonModule,
    FbCardComponent,
    TwitterCardComponent
  ],
  templateUrl: './social-card.component.html',
  styleUrl: './social-card.component.scss'
})
export class SocialCardComponent implements OnInit, OnChanges {
  @Input() type: SocialCardType;
  @ViewChild('vrf', { read: ViewContainerRef, static: true}) container: ViewContainerRef;
  cardTypes = SocialCardType;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type'].currentValue !== undefined) {
      const currentType = changes['type'].currentValue;
      const previousType = changes['type'].previousValue;
      this.loadDynamicComponent(currentType);
    }
  }
  ngOnInit(): void {}

  loadDynamicComponent(type: SocialCardType) {
    let component;

    switch (type) {
      case SocialCardType.Facebook:
        component = FbCardComponent
        break;

      case SocialCardType.Twitter:
        component = TwitterCardComponent;
        break;
    
      default:
        component = TwitterCardComponent;
        break;
    }

    if (component && this.container) {
      this.container.clear();
      this.container.createComponent(component);      
    }


  }



}
