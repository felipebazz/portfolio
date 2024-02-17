import { signal } from '@angular/core';
import { EStacksAndTools } from '../enums/EStacksAndTools.enum';
import { IDetails } from '../interfaces/details.interface';
import { EDetailType } from '../enums/EDetailType.enum';

export class ExperiencesConfig {
  static readonly experiences = signal<IDetails[]>([
    {
      type: EDetailType.Experience,
      summary: {
        role: 'Desenvolvedor Full-Stack',
        date: 'Wipro | fev de 2021 - jan de 2024',
      },
      description: `
        <p>Iniciei este desafio na consultoria, alocado no cliente Roche, onde tive a oportunidade de trabalhar exclusivamente no front-end com Angular, onde evolui bastante e em uma equipe de 5 colaboradores, desenvolvemos e entregamos
        um sistema de controle faturas, onde era possível acompanhar todo o fluxo de uma fatura, possibilitando maior controle e também auditoria.
        </p>
        <p>
        Após o fim do contrato com o cliente, iniciei no cliente Itaú Unibanco, onde fiquei resposável pelo desenvolvimento front-end de um sistema de compra e venda de ativos.
        Com as mudanças no cliente, o projeto mudou de direção, sendo mantido por outra equipe, e eu fui indicado para desenvolver outro projeto, esse, de acompanhamento de rendimento diário, fornecendo informações precisas dos impactos nos investimentos do cliente.
        </p>
        <p>E por último, meu mais recente projeto, um sistema de acompanhamento da carteira e vida financeira do cliente, monitorando movimentações para tentar reverter perda para concorrentes e oferecer oportunidades de investimentos.
        </p>`,
      stacksIds: [
        EStacksAndTools.Angular,
        EStacksAndTools.Bootstrap,
        EStacksAndTools.Csharp,
        EStacksAndTools.DotNetCore,
        EStacksAndTools.Css,
        EStacksAndTools.Html,
        EStacksAndTools.JavaScript,
        EStacksAndTools.TypeScript,
        EStacksAndTools.MsSql,
        EStacksAndTools.MySql,
        EStacksAndTools.Kafka,
        EStacksAndTools.Git,
        EStacksAndTools.Docker,
        EStacksAndTools.GitActions,
        EStacksAndTools.GitHub,
        EStacksAndTools.GitLab,
        EStacksAndTools.Aws,
        EStacksAndTools.Postman,
        EStacksAndTools.Insomnia,
        EStacksAndTools.Grafana,
        EStacksAndTools.Splunk,
        EStacksAndTools.VisualStudio,
        EStacksAndTools.VisualStudioCode,
        EStacksAndTools.Yaml,
      ]
    },
    {
      type: EDetailType.Experience,
      summary: {
        role: 'Desenvolvedor .NET',
        date: 'Sinqia | jan de 2019 - fev de 2021',
      },
      description: `
        <p>
        Iniciei meu segundo desafio no time de implantação do sistema de previdência, um software de plateleira, legado, mas rico em funcionalidades que era muito comercializado, eu realizava modificações e adaptações conforme negociado com o cliente,
        cabia a mim receber o documento com as modificações solicitadas, analisá-las e implementá-las, acompanhando o cliente nessa jornada até receber o feedback positivo, onde após a entrega, o cliente passava a ser acompanhado pela área de atendimento.
        Devido ao bom desempenho e relacionamento com o cliente, passei a atender o principal cliente da empresa após a implantação, participando de reuniões para tirar dúvidas e analisar novas funcionalidades. Foi questão de pouco tempo para eu começar a atender
        outros clientes a ficar responsável por todas a suas solicitações.
        </p>`,
      stacksIds: [
        EStacksAndTools.Csharp,
        EStacksAndTools.DotNet,
        EStacksAndTools.DotNetCore,
        EStacksAndTools.Html,
        EStacksAndTools.Css,
        EStacksAndTools.Git,
        EStacksAndTools.MsSql,
        EStacksAndTools.Oracle,
        EStacksAndTools.VisualStudio,
      ]
    },
    {
      type: EDetailType.Experience,
      summary: {
        role: 'Assistente de Desenvolvimento',
        date: 'Copastur | nov de 2018 - nov de 2019',
      },
      description: `
        <p>
        Em minha primeira experiência como desenvolvedor, iniciei desenvolvendo aplicações para automatizar tarefas e processos da empresa, diminuindo o tempo de resposta dos colaboradores para os fornecedores.
        Conforme fui adquirindo conhecimento, avancei para o desenvolvimento de aplicações que impactariam diretamente os clientes da empresa, destaco a criação de um sistema de Vouchers, onde é possível criar campanhas personalizadas
        e fazer o envio diretamente aos clientes com todas as informações referente a campanha, um portal empresarial oferecido a todos os clientes empresa, onde era possível acessar informações sobre viagens da empresa, e devido a sua versatilidade,
        algumas empresas optaram por usá-lo como portal único, e por último, um sistema que obtinha informações de hotéis em um raio selecionado no mapa pelo usuário, e após salvar suas informações, era possível enviar um formulário via e-mail para esses hotéis,
        para que o hotel apresentasse seus benefícios e valores, assim agilizando a forma como a empresa negociava com hotéis.
        </p>
        <p
        >Além do desenvolvimento de novas aplicações, eu também realizava o monitoramento de processos, do sistema legado, e quando necessário, realizava manutenção dele.
        </p>`,
      stacksIds: [
        EStacksAndTools.AngularJS,
        EStacksAndTools.Csharp,
        EStacksAndTools.DotNet,
        EStacksAndTools.Bootstrap,
        EStacksAndTools.Html,
        EStacksAndTools.Css,
        EStacksAndTools.JavaScript,
        EStacksAndTools.MsSql,
        EStacksAndTools.VisualStudio,
        EStacksAndTools.Postman,
      ]
    },
  ]);
}
