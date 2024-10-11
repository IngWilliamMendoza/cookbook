import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges {

  @Input() highlightText = '';
  @Input() highlightColor= 'yellow';
  originalHTML = '';

  constructor(private elmRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['highlightText'].firstChange) {
      this.originalHTML = this.elmRef.nativeElement.innerHTML;
      return;
    }
    const {currentValue} = changes['highlightText'];
    
    if (currentValue) {
      const regExp = new RegExp(`(${currentValue})`, 'gi');
      this.elmRef.nativeElement.innerHTML = this.originalHTML.replace(
        regExp, `<span style="background-color: ${this.highlightColor}">\$1</span>`
      )
    } else {
      this.elmRef.nativeElement.innerHTML = this.originalHTML;
    }
  }

}
