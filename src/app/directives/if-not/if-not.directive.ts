import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]',
  standalone: true,
})
export class IfNotDirective {
  condition: boolean;

  constructor( private templateRef: TemplateRef<any>, 
    private viewContainer: ViewContainerRef ) { }

  @Input() set appIfNot(condition: boolean) {
    if (condition === false) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  } 

}
