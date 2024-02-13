import { signal } from "@angular/core";
import { IProjects } from "../interfaces/projects.interface";

export class ProjectConfig {
  static readonly arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/icons/knowledge/github.svg',
      alt: '',
      title: 'Meu GitHub',
      width: '100px',
      height: '51px',
      description: `
      Em meu GitHub você pode encontrar alguns projetos, como esse que você está visualizando agora,
      e também um projeto que desenvolvo no meu tempo livre, para automatizar a criação de guias de conquistas,
      lá você pode dar uma olhada em meu código e conferir a arquitetura, framework e design pattern que eu utilizo para desenvolver aplicações.`,
      links: [
        {
          name: 'Acessar GitHub',
          href: 'https://github.com/felipebazz'
        }
      ]
    },
    {
      src: 'assets/icons/steam.svg',
      alt: '',
      title: 'Guias de Conquistas',
      width: '100px',
      height: '51px',
      description: `
      Além de desenvolver aplicações, também gosto de jogar videogame, e alguns jogos possuem conquistas,
      ou troféus dependendo da plataforma, que consiste em realizar desafios para obtê-los, extendendo o tempo de jogo.
      Foi então que eu resolvi criar guias de conquistas para ajudar outros jogadores a obter essas conquistas, compartilhando dicas e métodos
      para obtê-las e conseguir a tão desejada 'platina'.
      No link abaixo você pode visualizar alguns dos meus guias já lançados, neles, além de escrever, eu também faço a edição das imagens no Photoshop,
      e antigamente eu também fazia vídeos.
      Escrever esses guias me ajudou a melhorar minhas habildades de documentar os sistemas que desenvolvi durante minha carreira.`,
      links: [
        {
          name: 'Meus guias na Steam',
          href: 'https://steamcommunity.com/id/wherearemygames/myworkshopfiles/?section=guides'
        }
      ]
    },
  ]);
}
