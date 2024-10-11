import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfNotDirective } from '../../../directives/if-not/if-not.directive';

enum Visibility {
  On = 'on',
  Off = 'off'
}

@Component({
  selector: 'app-if-not-directive',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    IfNotDirective
  ],
  templateUrl: './if-not-directive.component.html',
  styleUrl: './if-not-directive.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IfNotDirectiveComponent implements OnInit { 
  visibility: Visibility;
  VISIBILITY = Visibility;

  ngOnInit(): void {
    this.setVisibility(Visibility.On);
  }

  setVisibility(visibility: Visibility): void {
    this.visibility = visibility;
  }

}
