import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  standalone: true,
  imports: [],
  templateUrl: './vc-logs.component.html',
  styleUrl: './vc-logs.component.scss'
})
export class VcLogsComponent implements OnInit, OnChanges {

  @Input() vName: string;
  logs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currValue = changes['vName'].currentValue;
    if (changes['vName'].isFirstChange()) {
      this.logs.push(`initial version is ${currValue.trim()}`);
    } else {
      this.logs.push(`version changed to ${currValue.trim()}`);
    }
    
  }

}
