import { signal } from "@angular/core";
import { IDetails } from "../interfaces/details.interface";
import { EDetailType } from "../enums/EDetailType.enum";

export class EducationConfig {
  static readonly education = signal<IDetails[]>([
    {
      type: EDetailType.Education,
      summary: {
        role: 'Análise e Desenvolvimento de Sistemas',
        date: 'Universidade Paulista | 2016 - 2018',
      },
      description: `
        <p>Curso tecnológico em analise e desenvolvimento de sistemas, com foco no desenvolvimento de sistemas utilizando metodologia ágil,
        gerenciamento de projetos, e boas práticas de programação. Apresentando também ferramentas utéis para o gerenciamento de projetos e ciclo de vida de desenvolvimento.</p>`,
      stacksIds: [],
      url: ''
    },
    {
      type: EDetailType.Education,
      summary: {
        role: 'Técnico em Informática',
        date: 'ETEC de Francisco Morato | 2012 - 2013',
      },
      description: `
        <p>Curso técnico em Informática com foco em desenvolvimento de sistemas, introduzindo lógica de programação,
        apresentando as linguagens de programação, ciclo de vida e todo o ecossistema do desenvolvimento de software.</p>`,
      stacksIds: [],
      url: ''
    }
  ])
}
