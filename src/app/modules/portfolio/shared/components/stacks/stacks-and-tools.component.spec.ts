import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StacksAndToolsComponent } from './stacks-and-tools.component';

describe('StacksAndToolsComponent', () => {
  let component: StacksAndToolsComponent;
  let fixture: ComponentFixture<StacksAndToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StacksAndToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StacksAndToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
