import { Component, Input, OnInit } from '@angular/core';
import { StacksService } from '../../../services/stacks.service';
import { Stack } from '../../../interfaces/stacks.interface';

@Component({
  selector: 'app-stacks-and-tools',
  standalone: true,
  imports: [],
  templateUrl: './stacks-and-tools.component.html',
  styleUrl: './stacks-and-tools.component.scss'
})
export class StacksAndToolsComponent implements OnInit {
  @Input() public inputStacks: number[] = [];
  public stacksAndTools: Stack[] = [];

  constructor(private stacksService: StacksService) { }

  ngOnInit(): void {
    const allStacks = this.stacksService.getStacks();

    this.inputStacks.forEach((data: number) => {
      const matchingStack = allStacks.find((stack) => stack.id === data);
      if (matchingStack) {
        this.stacksAndTools.push(matchingStack);
      }
    });
  }
}
