import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interfaces/knowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      icon: 'assets/icons/knowledge/c-sharp.svg',
      alt: 'Ícone de conhecimento c-sharp',
      title: 'C#'
    },
    {
      icon: 'assets/icons/knowledge/dotnet.svg',
      alt: 'Ícone de conhecimento .net',
      title: '.NET Core'
    },
    {
      icon: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento angular',
      title: 'Angular'
    },
    {
      icon: 'assets/icons/knowledge/typescript.svg',
      alt: 'Ícone de conhecimento typescript',
      title: 'Typescript'
    },
    {
      icon: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento javascript',
      title: 'Javascript'
    },
    {
      icon: 'assets/icons/knowledge/mssql.svg',
      alt: 'Ícone de conhecimento Microsoft SQL',
      title: 'Microsoft SQL Server'
    },
    {
      icon: 'assets/icons/knowledge/mysql.svg',
      alt: 'Ícone de conhecimento MySQL',
      title: 'MySQL'
    },
    {
      icon: 'assets/icons/knowledge/git.svg',
      alt: 'Ícone de conhecimento Git',
      title: 'Git'
    },
    {
      icon: 'assets/icons/knowledge/github.svg',
      alt: 'Ícone de conhecimento GitHub',
      title: 'GitHub'
    },
    {
      icon: 'assets/icons/knowledge/gitlab.svg',
      alt: 'Ícone de conhecimento GitLab',
      title: 'GitLab'
    },
    {
      icon: 'assets/icons/knowledge/aws.svg',
      alt: 'Ícone de conhecimento AWS',
      title: 'AWS'
    }
])
}
