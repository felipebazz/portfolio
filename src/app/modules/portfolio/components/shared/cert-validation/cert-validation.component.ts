import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-cert-validation',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './cert-validation.component.html',
  styleUrl: './cert-validation.component.scss'
})
export class CertValidationComponent {
  @Input({required: true}) public inputValidation: string = '';
}
