import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciesComponent } from './experiences.component';

describe('ExperienciesComponent', () => {
  let component: ExperienciesComponent;
  let fixture: ComponentFixture<ExperienciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
