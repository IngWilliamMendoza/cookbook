import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ReadTimeConfig {
  wordsPerMinute: number;
}

@Directive({
  selector: '[appReadTime]',
  standalone: true,
})
export class ReadTimeDirective implements OnInit {
  @Input() config: ReadTimeConfig = { wordsPerMinute: 200 };
  @Output() readtimeCalculated: EventEmitter<string> = new EventEmitter<string>();


  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const text = this.el.nativeElement.textContent || '';
    const readTime = this.calculateReadTime(text);
    const timeString = this.createTimeString(readTime);
    this.readtimeCalculated.emit(timeString);
  }

  calculateReadTime(text: string): number {
    const words = text.split(' ').length;
    const readTime = Math.ceil(words / (this.config.wordsPerMinute));
    return readTime;
  }

  createTimeString(readTime: number): string {
    if (readTime === 1) {
      return '1 minute';      
    } else if ( readTime < 1) {
      return `minus of 1 minute`;
    } else {
      return `${readTime} minutes`;
    }
  }
  



 }
