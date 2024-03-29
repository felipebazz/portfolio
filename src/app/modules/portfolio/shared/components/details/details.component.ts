import { Component, Input, OnInit, signal } from '@angular/core';
import { EDetailType } from '../../../enums/EDetailType.enum';
import { IDetails } from '../../../interfaces/details.interface';
import { StacksAndToolsComponent } from '../stacks/stacks-and-tools.component';
import { CommonModule } from '@angular/common';
import { CertValidationComponent } from '../cert-validation/cert-validation.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
    selector: 'app-details',
    standalone: true,
    templateUrl: './details.component.html',
    styleUrl: './details.component.scss',
    imports: [
      CommonModule,
      StacksAndToolsComponent,
      CertValidationComponent,
      GalleryComponent,
      LoadingComponent]
})
export class DetailsComponent implements OnInit {
  @Input({required: true}) public inputDetail: Array<IDetails> = [];
  @Input({required: true}) public inputDarkMode: boolean = false;

  public hasStacks = signal<boolean>(false);
  public hasCertificate = signal<boolean>(false);
  public type!: EDetailType;

  ngOnInit(): void {
    this.hasStacks.set(this.inputDetail[0].stacksIds.length > 0);
    this.hasCertificate.set(this.inputDetail.some(s => s.certificateImage));
    this.type = this.inputDetail[0].type;
  }
}
