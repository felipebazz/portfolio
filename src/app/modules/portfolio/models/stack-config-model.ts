import { EStacksAndTools } from "../enums/EStacksAndTools.enum";
import { Stack } from "../interfaces/stacks.interface";

export class StackConfig {
  static readonly stacks: Stack[] = [
    { id: EStacksAndTools.Angular, title: 'Angular', icon: 'assets/icons/stacks/angular.svg' },
    { id: EStacksAndTools.Aws, title: 'Aws', icon: 'assets/icons/stacks/aws.svg' },
    { id: EStacksAndTools.Bootstrap, title: 'Bootstrap', icon: 'assets/icons/stacks/bootstrap.svg' },
    { id: EStacksAndTools.Csharp, title: 'C-Sharp', icon: 'assets/icons/stacks/c-sharp.svg' },
    { id: EStacksAndTools.Css, title: 'Css', icon: 'assets/icons/stacks/css3.svg' },
    { id: EStacksAndTools.Docker, title: 'Docker', icon: 'assets/icons/stacks/docker.svg' },
    { id: EStacksAndTools.DotNet, title: '.Net', icon: 'assets/icons/stacks/dotnet.svg' },
    { id: EStacksAndTools.DotNetCore, title: '.Net Core', icon: 'assets/icons/stacks/dotnetcore.svg' },
    { id: EStacksAndTools.Git, title: 'Git', icon: 'assets/icons/stacks/git.svg' },
    { id: EStacksAndTools.GitActions, title: 'Git Actions', icon: 'assets/icons/stacks/gitactions.svg' },
    { id: EStacksAndTools.GitHub, title: 'GitHub', icon: 'assets/icons/stacks/github.svg' },
    { id: EStacksAndTools.GitLab, title: 'GitLab', icon: 'assets/icons/stacks/gitlab.svg' },
    { id: EStacksAndTools.Grafana, title: 'Grafana', icon: 'assets/icons/stacks/grafana.svg' },
    { id: EStacksAndTools.Html, title: 'Html', icon: 'assets/icons/stacks/html5.svg' },
    { id: EStacksAndTools.Insomnia, title: 'Insomnia', icon: 'assets/icons/stacks/insomnia.svg' },
    { id: EStacksAndTools.JavaScript, title: 'JavaScript', icon: 'assets/icons/stacks/javascript.svg' },
    { id: EStacksAndTools.Kafka, title: 'Kafka', icon: 'assets/icons/stacks/kafka.svg' },
    { id: EStacksAndTools.MsSql, title: 'Microsoft SQL Server', icon: 'assets/icons/stacks/mssql.svg' },
    { id: EStacksAndTools.MySql, title: 'MySQL', icon: 'assets/icons/stacks/mysql.svg' },
    { id: EStacksAndTools.Oracle, title: 'Oracle', icon: 'assets/icons/stacks/oracle.svg' },
    { id: EStacksAndTools.Postman, title: 'Postman', icon: 'assets/icons/stacks/postman.svg' },
    { id: EStacksAndTools.Splunk, title: 'Splunk', icon: 'assets/icons/stacks/splunk.svg' },
    { id: EStacksAndTools.TypeScript, title: 'TypeScript', icon: 'assets/icons/stacks/typescript.svg' },
    { id: EStacksAndTools.VisualStudio, title: 'Visual Studio', icon: 'assets/icons/stacks/vs.svg' },
    { id: EStacksAndTools.VisualStudioCode, title: 'Visual Studio Code', icon: 'assets/icons/stacks/vscode.svg' },
    { id: EStacksAndTools.Yaml, title: 'Yaml', icon: 'assets/icons/stacks/yaml.svg' },
    { id: EStacksAndTools.AngularJS, title: 'AngularJS', icon: 'assets/icons/stacks/angularjs.svg' }
  ]
}
