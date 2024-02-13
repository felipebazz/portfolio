import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';
import { ExperienciesComponent } from '../../components/experiencies/experiences.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { DetailsComponent } from '../../components/shared/details/details.component';
import { EducationComponent } from '../../components/education/education.component';
import { CertificateComponent } from '../../components/certificate/certificate.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    KnowledgeComponent,
    ExperienciesComponent,
    ProjectsComponent,
    DetailsComponent,
    EducationComponent,
    CertificateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
