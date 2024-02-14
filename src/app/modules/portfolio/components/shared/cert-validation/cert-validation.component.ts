import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ErrorComponent } from '../error/error.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cert-validation',
  standalone: true,
  imports: [MatButtonModule, ErrorComponent, NgClass],
  templateUrl: './cert-validation.component.html',
  styleUrl: './cert-validation.component.scss'
})
export class CertValidationComponent {
  @Input({required: true}) public inputValidation: string | undefined = '';
}
