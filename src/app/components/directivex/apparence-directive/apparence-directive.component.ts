import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../../directives/highlight.directive';

@Component({
  selector: 'app-apparence-directive',
  standalone: true,
  imports: [FormsModule, HighlightDirective],
  templateUrl: './apparence-directive.component.html',
  styleUrl: './apparence-directive.component.scss'
})
export class ApparenceDirectiveComponent {
  searchText = '';
}
