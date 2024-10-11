import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightColor, HighlightDirective } from '../../../directives/highlight/highlight.directive';

@Component({
  selector: 'app-enhanced-template-type-checking',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HighlightDirective
  ],
  templateUrl: './enhanced-template-type-checking.component.html',
  styleUrl: './enhanced-template-type-checking.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnhancedTemplateTypeCheckingComponent {
  searchText = '';
  hColor = HighlightColor.LightGreen;
}
