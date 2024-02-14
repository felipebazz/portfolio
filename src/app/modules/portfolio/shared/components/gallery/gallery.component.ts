import { Component, Input } from '@angular/core';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ErrorComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})

export class GalleryComponent {
  @Input({required: true}) public imageSource: string | undefined = '';

  constructor() {}
}
