import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})

export class GalleryComponent {
  @Input({required: true}) public imageSource: string | undefined = '';

  constructor() {}
}
