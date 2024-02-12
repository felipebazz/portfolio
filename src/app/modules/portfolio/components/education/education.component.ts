import { Component, Input } from '@angular/core';
import { EducationConfig } from '../../models/education-config.model';
import { DetailsComponent } from '../shared/details/details.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [DetailsComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  public arrayEducation = EducationConfig.education;
}
