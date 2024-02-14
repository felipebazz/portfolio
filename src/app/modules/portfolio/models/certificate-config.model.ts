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
       `<p>
       Esse curso é voltado para lidar com desafios complexos, especialmente quando se trata do ASP.NET Core. Em ambientes corporativos, sabemos que performance, escalabilidade, segurança e resiliência são cruciais.
       Aqui o curso não só foca nesses pontos, mas também abordam a complexidade das regras de negócios. A ideia é aprender a implementar de uma forma limpa, coesa e fácil de manter.
       </p>
       <p>
       Aqui o desafio é desenvolver aplicações corporativas de alta complexidade, adotando uma abordagem de múltiplas camadas e usando arquiteturas sólidas como DDD, CQRS e EventSourcing. O interessante é que o curso destaca o design da aplicação, destacando a análise do propósito de negócios ao invés de só pensar em tecnologia.
        </p>
        `,
      stacksIds: [],
      url: 'https://desenvolvedor.io/certificado/adc8d8b6-4034-4da0-a3d1-7bb05ac3faa4',
      certificateImage: 'assets/img/certificates/aspnetcoreea.png'
    },
    {
      type: EDetailType.Certificate,
      summary: {
        role: 'ASP.NET MVC Core',
        date: 'Desenvolvedor.io | 2023',
      },
      description:
       `<p>
       Este curso mergulha no avanço constante do desenvolvimento de aplicações Web com ASP.NET MVC Core, destacando a predileção de muitos desenvolvedores pelo modelo de renderização server-side e os recursos poderosos do Razor.
       </p>
       <p>
       Ao longo do percurso, a jornada abrange a construção completa de uma aplicação ASP.NET MVC Core, desde a concepção inicial do projeto até a fase de implantação em produção. Ao final, a habilidade adquirida permite criar novas aplicações e lidar com a manutenção de projetos existentes, aplicando as melhores práticas do mercado.
        </p>
        `,
      stacksIds: [],
      url: 'https://desenvolvedor.io/certificado/198c43fd-72cd-4d01-90d2-489a317ed253',
      certificateImage: 'assets/img/certificates/aspnetmvccore.png'
    },
    {
      type: EDetailType.Certificate,
      summary: {
        role: 'REST com ASP.NET Core WebAPI',
        date: 'Desenvolvedor.io | 2022',
      },
      description:
       `<p>
       O curso explora as razões para implementar API's, incluindo integração com outras plataformas, exposição de dados para aplicações móveis, criação de back-end para modelos SPA e adoção do modelo de Microsserviços.
       </p>
       <p>
       Foca no ASP.NET Core WebAPI versão 2.2, ensinando a projetar e modelar API's REST, com objetivo de capacitar a entregar API's funcionais, com desempenho, segurança para diversas finalidades.
        </p>
        `,
      stacksIds: [],
      url: 'https://desenvolvedor.io/certificado/d2665524-07b4-4efe-a5ff-9488c0293ba0',
      certificateImage: 'assets/img/certificates/restaspnetcore.png'
    },
    {
      type: EDetailType.Certificate,
      summary: {
        role: 'ASP.NET Core',
        date: 'Desenvolvedor.io | 2022',
      },
      description:
       `<p>
       Este curso explora  os fundamentos da plataforma .NET e ASP.NET. O foco é proporcionar conhecimentos básicos para começar a desenvolver em ASP.NET, abrangendo a criação de Web Sites com MVC, APIs, Blazor e Razor Pages.
        </p>`,
      stacksIds: [],
      url: 'https://desenvolvedor.io/certificado/aaadc8dc-e69e-4752-8a5f-99e8abc2aead',
      certificateImage: 'assets/img/certificates/aspnetcore.png'
    },
    {
      type: EDetailType.Certificate,
      summary: {
        role: 'C# Avançado',
        date: 'Udemy | 2020',
      },
      description:
       `<p>
       O curso abrange desde a introdução básica até recursos avançados de C#.
       Inclui fundamentos da linguagem, controle de fluxo, Orientação a Objetos, coleções, métodos e funções, tratamento de exceções, manipulação de arquivos e datas, e tópicos avançados como Generics, LINQ, Dynamic e Nullables.
        </p>`,
      stacksIds: [],
      url: 'https://ude.my/UC-d8bc2dba-87ae-4917-8a22-201f8f223934',
      certificateImage: 'assets/img/certificates/csharp.png'
    },
  ]);
}
