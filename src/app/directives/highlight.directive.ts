import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input() highlightText = '';
  @Input() highlightColor= 'yellow';

  constructor() { }

}
