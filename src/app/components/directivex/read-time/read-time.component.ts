import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReadTimeDirective } from '../../../directives/readtime/read-time.directive';

@Component({
  selector: 'app-read-time',
  standalone: true,
  imports: [
    CommonModule,
    ReadTimeDirective
  ],
  templateUrl: './read-time.component.html',
  styleUrl: './read-time.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadTimeComponent {
  readTime: string;

  onReadTimeCalculated(readTime: string): void {
    this.readTime = readTime;
  }


 }
