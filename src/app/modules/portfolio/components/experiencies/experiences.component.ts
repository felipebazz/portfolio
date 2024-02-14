import { Component, signal } from '@angular/core';
import { StacksAndToolsComponent } from '../../shared/components/stacks/stacks-and-tools.component';
import { ExperiencesConfig } from '../../models/experiences-config.model';
import { DetailsComponent } from '../../shared/components/details/details.component';

@Component({
  selector: 'app-experiencies',
  standalone: true,
  imports: [StacksAndToolsComponent, DetailsComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperienciesComponent {
  public arrayExperiences = ExperiencesConfig.experiences;
}
