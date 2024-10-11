import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollToDirective } from '../../../directives/scroll-to/scroll-to.directive';

@Component({
  selector: 'app-vertical-scroll',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ScrollToDirective
  ],
  templateUrl: './vertical-scroll.component.html',
  styleUrl: './vertical-scroll.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalScrollComponent { }
