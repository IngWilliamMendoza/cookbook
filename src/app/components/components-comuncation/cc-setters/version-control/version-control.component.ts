import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VcLogsComponent } from '../vc-logs/vc-logs.component';

@Component({
  selector: 'app-version-control',
  standalone: true,
  imports: [ReactiveFormsModule, VcLogsComponent],
  templateUrl: './version-control.component.html',
  styleUrl: './version-control.component.scss'
})
export class VersionControlComponent implements OnInit{
  versionForm = new FormGroup({
    version: new FormControl('', [Validators.pattern('([0-9]+)\.([0-9]+)\.([0-9]+)')])
  });
  versionName = '0.0.0';
  constructor() {}

  ngOnInit(): void {
    this.versionForm.get('version')?.setValue(this.versionName);
  }

  formSubmit() {
    if(!this.versionForm.valid){
      alert('Invalid version value. Please use symantic versioning')
      return;
    }
    this.versionName = this.versionForm.get('version')?.value ?? '0.0.0';
  }

}
