import { Component } from '@angular/core';
import { CertificateConfig } from '../../models/certificate-config.model';
import { DetailsComponent } from '../shared/details/details.component';
import { CertValidationComponent } from '../shared/cert-validation/cert-validation.component';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [DetailsComponent, CertValidationComponent],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss'
})
export class CertificateComponent {
  public arrayCertificates =  CertificateConfig.certificates;
}
