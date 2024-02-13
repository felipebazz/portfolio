import { Component, Input, OnInit, signal } from '@angular/core';
import { EDetailType } from '../../../enums/EDetailType.enum';
import { IDetails } from '../../../interfaces/details.interface';
import { StacksAndToolsComponent } from '../stacks/stacks-and-tools.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-details',
    standalone: true,
    templateUrl: './details.component.html',
    styleUrl: './details.component.scss',
    imports: [CommonModule, StacksAndToolsComponent]
})
export class DetailsComponent implements OnInit {
  @Input({required: true}) public inputDetail: Array<IDetails> = [];
  @Input({required: true}) public inputDarkMode: boolean = false;

  public hasStacks = signal<boolean>(false);
  public type!: EDetailType;

  constructor() {

  }

  ngOnInit(): void {
    this.hasStacks.set(this.inputDetail[0].stacksIds.length > 0);
    this.type = this.inputDetail[0].type;
  }
}
