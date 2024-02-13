import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProjects } from '../../../interfaces/projects.interface';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit {
  public getData = signal<IProjects | null>(null);

  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects
    ) {}

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeDialog() {
    return this._dialogRef.close();
  }
}
