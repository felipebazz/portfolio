import { signal } from '@angular/core';
import { IDetails } from '../interfaces/details.interface';
import { EDetailType } from '../enums/EDetailType.enum';

export class CertificateConfig {
  static readonly certificates = signal<IDetails[]>([
    {
      type: EDetailType.Certificate,
      summary: {
        role: 'ASP.NET Core Enterprise Applications',
        date: 'Desenvolvedor.io | 2023',
      },
      description:
       `<p>Curso técnológico em analise e desenvolvimento de sistemas, com foco no desenvolvimento de sistemas utilizando metodologia ágil,
        gerenciamento de projetos, e boas práticas de programação. Apresentando também ferramentas utéis para o gerenciamento de projetos e ciclo de vida de desenvolvimento.</p>`,
      stacksIds: [],
      url: 'https://desenvolvedor.io/certificado/adc8d8b6-4034-4da0-a3d1-7bb05ac3faa4'
    },
    {
      type: EDetailType.Certificate,
      summary: {
        role: 'ASP.NET MVC Core',
        date: 'Desenvolvedor.io | 2023',
      },
      description:
       `<p>Curso técnológico em analise e desenvolvimento de sistemas, com foco no desenvolvimento de sistemas utilizando metodologia ágil,
        gerenciamento de projetos, e boas práticas de programação. Apresentando também ferramentas utéis para o gerenciamento de projetos e ciclo de vida de desenvolvimento.</p>`,
      stacksIds: [],
      url: 'https://desenvolvedor.io/certificado/198c43fd-72cd-4d01-90d2-489a317ed253'
    },
    {
      type: EDetailType.Certificate,
      summary: {
        role: 'REST com ASP.NET Core WebAPI',
        date: 'Desenvolvedor.io | 2022',
      },
      description:
       `<p>Curso técnológico em analise e desenvolvimento de sistemas, com foco no desenvolvimento de sistemas utilizando metodologia ágil,
        gerenciamento de projetos, e boas práticas de programação. Apresentando também ferramentas utéis para o gerenciamento de projetos e ciclo de vida de desenvolvimento.</p>`,
      stacksIds: [],
      url: 'https://desenvolvedor.io/certificado/d2665524-07b4-4efe-a5ff-9488c0293ba0'
    },
    {
      type: EDetailType.Certificate,
      summary: {
        role: 'ASP.NET Core',
        date: 'Desenvolvedor.io | 2022',
      },
      description:
       `<p>Curso técnológico em analise e desenvolvimento de sistemas, com foco no desenvolvimento de sistemas utilizando metodologia ágil,
        gerenciamento de projetos, e boas práticas de programação. Apresentando também ferramentas utéis para o gerenciamento de projetos e ciclo de vida de desenvolvimento.</p>`,
      stacksIds: [],
      url: 'https://desenvolvedor.io/certificado/aaadc8dc-e69e-4752-8a5f-99e8abc2aead'
    },
    {
      type: EDetailType.Certificate,
      summary: {
        role: 'C# Avançado',
        date: 'Udemy | 2020',
      },
      description:
       `<p>Curso técnológico em analise e desenvolvimento de sistemas, com foco no desenvolvimento de sistemas utilizando metodologia ágil,
        gerenciamento de projetos, e boas práticas de programação. Apresentando também ferramentas utéis para o gerenciamento de projetos e ciclo de vida de desenvolvimento.</p>`,
      stacksIds: [],
      url: 'https://ude.my/UC-d8bc2dba-87ae-4917-8a22-201f8f223934'
    },
  ]);
}
